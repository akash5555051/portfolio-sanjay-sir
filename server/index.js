import express from 'express';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { pool, initDatabase } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '../public/images/uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Serve uploaded images statically
app.use('/images/uploads', express.static(uploadDir));

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    const uniqueName = 'upload_' + Date.now() + '_' + Math.round(Math.random() * 1e9) + ext;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// ==========================================
// 1. HEALTH & DATABASE STATUS
// ==========================================
app.get('/api/health', async (req, res) => {
  try {
    if (!pool) {
      return res.json({ status: 'ok', dbConnected: false, message: 'MySQL pool not initialized' });
    }
    const [result] = await pool.query('SELECT 1');
    res.json({ status: 'ok', dbConnected: true, database: 'sanjay_portfolio' });
  } catch (err) {
    res.json({ status: 'error', dbConnected: false, error: err.message });
  }
});

// ==========================================
// 2. AUTHENTICATION
// ==========================================
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username and password are required' });
  }

  try {
    const [rows] = await pool.query(
      'SELECT id, username, email FROM admin_users WHERE username = ? AND password = ?',
      [username, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }

    const admin = rows[0];
    res.json({
      success: true,
      message: 'Login successful',
      user: { id: admin.id, username: admin.username, email: admin.email }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Database error: ' + err.message });
  }
});

// ==========================================
// 3. FILE UPLOAD ENDPOINT
// ==========================================
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  const relativeUrl = `./images/uploads/${req.file.filename}`;
  res.json({
    success: true,
    url: relativeUrl,
    filename: req.file.filename
  });
});

// ==========================================
// 4. GALLERY CRUD ENDPOINTS
// ==========================================
// GET all gallery items
app.get('/api/gallery', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM gallery_items ORDER BY display_order ASC, created_at DESC');
    const parsed = rows.map(r => ({
      ...r,
      highlights: typeof r.highlights === 'string' ? JSON.parse(r.highlights || '[]') : (r.highlights || [])
    }));
    res.json({ success: true, data: parsed });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST new gallery item
app.post('/api/gallery', async (req, res) => {
  const { title, category, location, date, image, description, detailedStory, highlights } = req.body;

  if (!title || !category || !image) {
    return res.status(400).json({ success: false, message: 'Title, category, and image are required' });
  }

  const id = 'gal-' + Date.now();
  const highlightsJson = JSON.stringify(Array.isArray(highlights) ? highlights : []);

  try {
    await pool.query(
      `INSERT INTO gallery_items (id, title, category, location, date, image, description, detailedStory, highlights, display_order)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        title,
        category,
        location || 'India',
        date || '2026',
        image,
        description || '',
        detailedStory || '',
        highlightsJson,
        0
      ]
    );

    res.json({
      success: true,
      message: 'Gallery item added successfully',
      item: { id, title, category, location, date, image, description, detailedStory, highlights: Array.isArray(highlights) ? highlights : [] }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT update gallery item
app.put('/api/gallery/:id', async (req, res) => {
  const { id } = req.params;
  const { title, category, location, date, image, description, detailedStory, highlights } = req.body;

  const highlightsJson = JSON.stringify(Array.isArray(highlights) ? highlights : []);

  try {
    const [result] = await pool.query(
      `UPDATE gallery_items 
       SET title = ?, category = ?, location = ?, date = ?, image = ?, description = ?, detailedStory = ?, highlights = ?
       WHERE id = ?`,
      [title, category, location, date, image, description, detailedStory, highlightsJson, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Gallery item not found' });
    }

    res.json({ success: true, message: 'Gallery item updated successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE gallery item
app.delete('/api/gallery/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM gallery_items WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }
    res.json({ success: true, message: 'Gallery item deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ==========================================
// 5. SITE SETTINGS ENDPOINTS
// ==========================================
// GET all settings
app.get('/api/settings', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT key_name, value_text FROM site_settings');
    const settings = {};
    rows.forEach(r => {
      settings[r.key_name] = r.value_text;
    });
    res.json({ success: true, data: settings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST bulk update settings
app.post('/api/settings', async (req, res) => {
  const settings = req.body; // e.g. { phone: '...', email: '...', ... }

  try {
    for (const [key, value] of Object.entries(settings)) {
      await pool.query(
        `INSERT INTO site_settings (key_name, value_text) 
         VALUES (?, ?)
         ON DUPLICATE KEY UPDATE value_text = ?`,
        [key, String(value), String(value)]
      );
    }
    res.json({ success: true, message: 'Settings updated successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ==========================================
// 6. CONTACT INQUIRIES ENDPOINTS
// ==========================================
// GET all inquiries
app.get('/api/inquiries', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM contact_inquiries ORDER BY created_at DESC');
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST new inquiry from public contact page
app.post('/api/inquiries', async (req, res) => {
  const { name, email, phone, company, service, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, message: 'Name and email are required' });
  }

  try {
    const [result] = await pool.query(
      `INSERT INTO contact_inquiries (name, email, phone, company, service, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [name, email, phone || '', company || '', service || 'General Consultation', message || '']
    );

    res.json({
      success: true,
      message: 'Inquiry received successfully',
      id: result.insertId
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT update inquiry status
app.put('/api/inquiries/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  if (!['new', 'contacted', 'closed'].includes(status)) {
    return res.status(400).json({ success: false, message: 'Invalid status value' });
  }

  try {
    await pool.query('UPDATE contact_inquiries SET status = ? WHERE id = ?', [status, id]);
    res.json({ success: true, message: 'Status updated' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE inquiry
app.delete('/api/inquiries/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM contact_inquiries WHERE id = ?', [id]);
    res.json({ success: true, message: 'Inquiry deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ==========================================
// 7. DASHBOARD STATS
// ==========================================
app.get('/api/stats', async (req, res) => {
  try {
    const [galleryCount] = await pool.query('SELECT COUNT(*) as count FROM gallery_items');
    const [inquiriesTotal] = await pool.query('SELECT COUNT(*) as count FROM contact_inquiries');
    const [inquiriesNew] = await pool.query("SELECT COUNT(*) as count FROM contact_inquiries WHERE status = 'new'");

    res.json({
      success: true,
      data: {
        totalGallery: galleryCount[0].count,
        totalInquiries: inquiriesTotal[0].count,
        newInquiries: inquiriesNew[0].count,
        database: 'Connected (XAMPP MySQL)'
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Start Server
async function startServer() {
  await initDatabase();
  app.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 Sanjay Kumar Portfolio API Server running on port ${PORT}`);
    console.log(`📍 Endpoint: http://localhost:${PORT}/api/`);
    console.log(`📊 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`🗄️  Database: XAMPP MySQL (sanjay_portfolio)`);
    console.log(`======================================================\n`);
  });
}

startServer();
