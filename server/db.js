import mysql from 'mysql2/promise';

const DB_CONFIG = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  port: Number(process.env.DB_PORT) || 3306,
};

const DB_NAME = 'sanjay_portfolio';

export let pool = null;

// Initial gallery seed data
const INITIAL_GALLERY = [
  {
    id: 'gal-1',
    title: 'Keynote Address: AI & Practical Business Growth',
    category: 'Keynotes & Speaking',
    location: 'National Tech Summit, New Delhi',
    date: 'February 2026',
    image: './images/gallery/gallery-keynote-ai.jpg',
    description: 'Addressing 400+ founders and enterprise executives on pragmatic AI implementation and high-ROI automation.',
    detailedStory: 'Delivered the opening keynote on demystifying artificial intelligence for traditional mid-market businesses. Highlighted how automated lead qualification, customer service AI workflows, and CRM intelligence drive sustainable bottom-line margin expansion.',
    highlights: JSON.stringify(['400+ Enterprise Leaders', 'High-ROI AI Systems', 'Live Q&A Session']),
    display_order: 1
  },
  {
    id: 'gal-2',
    title: 'Executive Boardroom Strategy Session',
    category: 'Corporate Workshops',
    location: 'Corporate HQ, Mumbai',
    date: 'January 2026',
    image: './images/gallery/gallery-boardroom-strategy.jpg',
    description: 'Guiding the executive leadership board of a multi-crore manufacturer through a 3-year digital transformation roadmap.',
    detailedStory: 'Facilitated an intensive full-day executive alignment workshop with board members and department directors. Aligned IT infrastructure, ERP modernization, and distributor portal deployment to accelerate domestic and export sales velocity.',
    highlights: JSON.stringify(['Board-Level Alignment', '3-Year Growth Roadmap', 'ERP Modernization']),
    display_order: 2
  },
  {
    id: 'gal-3',
    title: 'Healthcare Digital Transformation Masterclass',
    category: 'Corporate Workshops',
    location: 'Medical Association Forum, Patna',
    date: 'November 2025',
    image: './images/gallery/gallery-healthcare-workshop.jpg',
    description: 'Equipping hospital directors and senior clinicians with automated patient acquisition and WhatsApp appointment systems.',
    detailedStory: 'Conducted an interactive masterclass for 60+ clinic founders on patient recall automation, reducing front-desk telephonic friction, and improving chronic care continuity through HIPAA/compliance-friendly digital workflows.',
    highlights: JSON.stringify(['60+ Medical Directors', 'Patient Recall Systems', 'Zero Front-Desk Bottlenecks']),
    display_order: 3
  },
  {
    id: 'gal-4',
    title: 'Panel Address: Scaling MSMEs Sustainably',
    category: 'Keynotes & Speaking',
    location: 'MSME Leadership Conclave, Bengaluru',
    date: 'October 2025',
    image: './images/gallery/gallery-sme-summit.jpg',
    description: 'Participating in an executive panel on capital efficiency, modern B2B lead generation, and scalable business systems.',
    detailedStory: 'Shared hands-on perspectives on shifting SMEs from founder-dependent daily operations toward documented, automated business systems that generate predictable recurring revenue without massive marketing burn.',
    highlights: JSON.stringify(['MSME Scaling Playbook', 'Capital Efficiency', 'Predictable Pipeline']),
    display_order: 4
  },
  {
    id: 'gal-5',
    title: 'On-Site Industrial Engineering Review',
    category: 'Client Visits & Consulting',
    location: 'Heavy Machinery Plant, Gujarat',
    date: 'September 2025',
    image: './images/gallery/gallery-consulting-plant.jpg',
    description: 'Walking the manufacturing shop floor with production heads to design connected IoT and digital distributor tracking.',
    detailedStory: 'Spent two days evaluating factory assembly lines, warehouse inventory throughput, and ERP dispatch alerts to connect customer order intake directly with machine production schedules.',
    highlights: JSON.stringify(['Shop Floor Walkthrough', 'Live Dispatch Sync', 'Supply Chain Optimization']),
    display_order: 5
  },
  {
    id: 'gal-6',
    title: 'Fireside Discussion on Enterprise Automation',
    category: 'Industry Summits & Awards',
    location: 'Global Business Expo, Hyderabad',
    date: 'August 2025',
    image: './images/gallery/gallery-tech-expo.jpg',
    description: 'Engaging in an insightful fireside chat on cloud infrastructure, workflow automation, and cross-department data integrity.',
    detailedStory: 'Discussed future-proofing mid-market technology stacks against legacy software lock-in, emphasizing modular cloud microservices and automated API integrations that scale smoothly.',
    highlights: JSON.stringify(['Fireside Tech Debate', 'Cloud Architectures', 'Modular Scalability']),
    display_order: 6
  },
  {
    id: 'gal-7',
    title: 'Mentoring Emerging Tech Founders & Innovators',
    category: 'Mentorship & Moments',
    location: 'Startup Incubation Hub, Patna',
    date: 'July 2025',
    image: './images/gallery/gallery-mentorship-startup.jpg',
    description: 'Guiding early-stage SaaS and B2B entrepreneurs on product-market fit, unit economics, and enterprise sales cycles.',
    detailedStory: 'Held 1-on-1 strategy teardowns for 12 selected startup founders, analyzing customer acquisition costs (CAC), lifetime value (LTV), and strategic outbound positioning.',
    highlights: JSON.stringify(['12 Cohort Startups', 'Unit Economics Focus', 'Go-To-Market Strategy']),
    display_order: 7
  },
  {
    id: 'gal-8',
    title: 'Excellence in Strategic Business Advisory Award',
    category: 'Industry Summits & Awards',
    location: 'Leadership Awards Gala, New Delhi',
    date: 'June 2025',
    image: './images/gallery/gallery-annual-business-award.jpg',
    description: 'Honored with the Business Consulting & Technology Transformation Excellence recognition for measurable SME impact.',
    detailedStory: 'Recognized among top consulting leaders for spearheading impactful turnaround projects and digital growth systems across healthcare, manufacturing, and professional services across India.',
    highlights: JSON.stringify(['Industry Recognition', '20+ Years Leadership', 'Proven SME ROI']),
    display_order: 8
  },
  {
    id: 'gal-9',
    title: 'Client Milestone & Strategic Retreat',
    category: 'Mentorship & Moments',
    location: 'Leadership Retreat, Goa',
    date: 'May 2025',
    image: './images/gallery/gallery-team-celebration.jpg',
    description: 'Facilitating an annual strategy and milestone reflection retreat for client executive teams.',
    detailedStory: 'Guided cross-functional leadership through retrospective KPI evaluations, team culture alignment, and upcoming fiscal year goal cascades in an immersive collaborative setting.',
    highlights: JSON.stringify(['Team KPI Cascades', 'Culture & Synergy', 'Strategic Reflection']),
    display_order: 9
  },
  {
    id: 'gal-10',
    title: 'International Partner Strategic Alignment',
    category: 'Client Visits & Consulting',
    location: 'Executive Center, Dubai',
    date: 'April 2025',
    image: './images/gallery/gallery-executive-briefing.jpg',
    description: 'Advising overseas distributors and Middle East channel partners on cross-border market expansion systems.',
    detailedStory: 'Structured strategic distributor incentive models and synchronized global customer relationship pipelines for multinational clients spanning the UAE, Saudi Arabia, and India.',
    highlights: JSON.stringify(['Cross-Border Growth', 'Distributor Incentives', 'Global Channel Sync']),
    display_order: 10
  },
  {
    id: 'gal-11',
    title: 'Continuous Learning & Systems Research',
    category: 'Mentorship & Moments',
    location: 'Consulting Office Library',
    date: 'March 2025',
    image: './images/gallery/gallery-reading-research.jpg',
    description: 'Researching emerging AI capabilities, growth playbooks, and modern enterprise frameworks in the consulting study.',
    detailedStory: 'Dedicated weekly deep-work sessions analyzing the newest developments in generative AI agents, enterprise CRM automation, and cognitive leadership playbooks.',
    highlights: JSON.stringify(['Deep Work & Research', 'Emerging Tech Analysis', 'Strategic Synthesis']),
    display_order: 11
  },
  {
    id: 'gal-12',
    title: 'Corporate Sales & CRM Pipeline Masterclass',
    category: 'Corporate Workshops',
    location: 'Enterprise Academy, Kolkata',
    date: 'February 2025',
    image: './images/gallery/gallery-corporate-training.jpg',
    description: 'Training 50+ sales managers and account executives on consultative B2B selling and pipeline hygiene.',
    detailedStory: 'Hands-on simulation workshop training enterprise sales professionals to leverage stage-by-stage CRM tracking, automated follow-up cadences, and objection handling strategies.',
    highlights: JSON.stringify(['50+ Sales Professionals', 'Pipeline Hygiene', 'Consultative Selling']),
    display_order: 12
  }
];

const INITIAL_SETTINGS = [
  { key_name: 'name', value_text: 'Sanjay Kumar', section: 'profile' },
  { key_name: 'subTitle', value_text: 'Business Technology & Growth Consultant', section: 'profile' },
  { key_name: 'founderBrand', value_text: 'BizTechX', section: 'profile' },
  { key_name: 'experienceYears', value_text: '20+', section: 'profile' },
  { key_name: 'tagline', value_text: 'STRATEGY | TECHNOLOGY | MARKETING | AUTOMATION | GROWTH', section: 'profile' },
  { key_name: 'phone', value_text: '+91 89358 00557', section: 'contact' },
  { key_name: 'whatsappNumber', value_text: '+91 89358 00557', section: 'contact' },
  { key_name: 'whatsappLink', value_text: 'https://wa.me/918935800557?text=Hi%20Sanjay,%20I%20would%20like%20to%20discuss%20a%20business%20growth%20consultation.', section: 'contact' },
  { key_name: 'email', value_text: 'sanjay@biztechx.com', section: 'contact' },
  { key_name: 'location', value_text: 'Patna, Bihar, India', section: 'contact' },
  { key_name: 'heroHeading1', value_text: 'Turning Ideas into', section: 'hero' },
  { key_name: 'heroHighlight', value_text: 'Real', section: 'hero' },
  { key_name: 'heroHeading2', value_text: 'Business Growth', section: 'hero' },
  { key_name: 'heroSubtext', value_text: 'I help businesses use technology, digital marketing and automation to acquire more customers, improve operations and build sustainable growth systems.', section: 'hero' },
  { key_name: 'heroQuote', value_text: 'My purpose is to help businesses grow with the right mix of strategy, technology and execution.', section: 'hero' }
];

export async function initDatabase() {
  try {
    // 1. Connect to MySQL server without database
    const connection = await mysql.createConnection(DB_CONFIG);
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`);
    await connection.end();

    // 2. Create connection pool to the database
    pool = mysql.createPool({
      ...DB_CONFIG,
      database: DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    console.log(`✓ Connected to XAMPP MySQL database: "${DB_NAME}"`);

    // 3. Create Tables
    // Admin Users Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(150),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB;
    `);

    // Seed default admin (admin / admin123)
    const [existingAdmins] = await pool.query('SELECT id FROM admin_users WHERE username = ?', ['admin']);
    if (existingAdmins.length === 0) {
      await pool.query(
        'INSERT INTO admin_users (username, password, email) VALUES (?, ?, ?)',
        ['admin', 'admin123', 'admin@sanjaykumar.com']
      );
      console.log('✓ Created default admin user: "admin" (password: "admin123")');
    }

    // Gallery Items Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS gallery_items (
        id VARCHAR(50) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        location VARCHAR(150) NOT NULL,
        date VARCHAR(100) NOT NULL,
        image TEXT NOT NULL,
        description TEXT,
        detailedStory TEXT,
        highlights TEXT,
        display_order INT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB;
    `);

    // Seed initial gallery items if table is empty
    const [galleryCount] = await pool.query('SELECT COUNT(*) as count FROM gallery_items');
    if (galleryCount[0].count === 0) {
      for (const item of INITIAL_GALLERY) {
        await pool.query(
          `INSERT INTO gallery_items (id, title, category, location, date, image, description, detailedStory, highlights, display_order)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            item.id,
            item.title,
            item.category,
            item.location,
            item.date,
            item.image,
            item.description,
            item.detailedStory,
            item.highlights,
            item.display_order
          ]
        );
      }
      console.log(`✓ Seeded ${INITIAL_GALLERY.length} initial gallery items into MySQL.`);
    }

    // Site Settings Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS site_settings (
        key_name VARCHAR(100) PRIMARY KEY,
        value_text TEXT,
        section VARCHAR(50) DEFAULT 'general',
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB;
    `);

    // Seed initial settings if empty
    const [settingsCount] = await pool.query('SELECT COUNT(*) as count FROM site_settings');
    if (settingsCount[0].count === 0) {
      for (const s of INITIAL_SETTINGS) {
        await pool.query(
          'INSERT INTO site_settings (key_name, value_text, section) VALUES (?, ?, ?)',
          [s.key_name, s.value_text, s.section]
        );
      }
      console.log(`✓ Seeded ${INITIAL_SETTINGS.length} site settings into MySQL.`);
    }

    // Contact Inquiries Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contact_inquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        email VARCHAR(150) NOT NULL,
        phone VARCHAR(50),
        company VARCHAR(150),
        service VARCHAR(150),
        message TEXT,
        status ENUM('new', 'contacted', 'closed') DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB;
    `);

    console.log('✓ All MySQL database tables initialized successfully!');
    return true;
  } catch (err) {
    console.error('⚠️ MySQL Database Initialization Error:', err.message);
    console.warn('Tip: Please ensure XAMPP MySQL is running on localhost:3306.');
    return false;
  }
}
