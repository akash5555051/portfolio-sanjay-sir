import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Image as ImageIcon,
  Settings as SettingsIcon,
  Inbox,
  LogOut,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Upload,
  RefreshCw,
  Search,
  Eye,
  X,
  Save,
  Database,
  Lock,
  User,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Tag,
  Calendar
} from "lucide-react";

const API_BASE = "http://localhost:5000/api";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  image: string;
  description: string;
  detailedStory: string;
  highlights: string[];
}

interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  status: "new" | "contacted" | "closed";
  created_at: string;
}

export const Admin: React.FC = () => {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("sanjay_admin_auth") === "true";
  });
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin123");
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // Active Tab: 'overview' | 'gallery' | 'settings' | 'inquiries'
  const [activeTab, setActiveTab] = useState<"overview" | "gallery" | "settings" | "inquiries">("overview");

  // Database Connection Status
  const [dbStatus, setDbStatus] = useState<{ connected: boolean; message: string }>({
    connected: false,
    message: "Checking database..."
  });

  // Stats
  const [stats, setStats] = useState({
    totalGallery: 0,
    totalInquiries: 0,
    newInquiries: 0,
    database: "Connecting..."
  });

  // Gallery items
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [galleryLoading, setGalleryLoading] = useState(false);
  const [gallerySearch, setGallerySearch] = useState("");
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);

  // Gallery Form State
  const [formTitle, setFormTitle] = useState("");
  const [formCategory, setFormCategory] = useState("Keynotes & Speaking");
  const [formLocation, setFormLocation] = useState("");
  const [formDate, setFormDate] = useState("");
  const [formImage, setFormImage] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formDetailedStory, setFormDetailedStory] = useState("");
  const [formHighlights, setFormHighlights] = useState("");
  const [uploadLoading, setUploadLoading] = useState(false);

  // Settings State
  const [settings, setSettings] = useState<Record<string, string>>({
    name: "Sanjay Kumar",
    subTitle: "Business Technology & Growth Consultant",
    founderBrand: "BizTechX",
    experienceYears: "20+",
    phone: "+91 89358 00557",
    whatsappNumber: "+91 89358 00557",
    whatsappLink: "https://wa.me/918935800557",
    email: "sanjay@biztechx.com",
    location: "Patna, Bihar, India",
    heroHeading1: "Turning Ideas into",
    heroHighlight: "Real",
    heroHeading2: "Business Growth",
    heroSubtext: "I help businesses use technology, digital marketing and automation to acquire more customers.",
    heroQuote: "My purpose is to help businesses grow with the right mix of strategy, technology and execution."
  });
  const [settingsSaving, setSettingsSaving] = useState(false);
  const [settingsToast, setSettingsToast] = useState("");

  // Inquiries State
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [inquiriesLoading, setInquiriesLoading] = useState(false);
  const [activeInquiryModal, setActiveInquiryModal] = useState<Inquiry | null>(null);

  // Toast notification
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  // Check Database & Fetch initial data
  const checkHealthAndLoad = async () => {
    try {
      const res = await fetch(`${API_BASE}/health`);
      const data = await res.json();
      if (data.dbConnected) {
        setDbStatus({ connected: true, message: "Connected to XAMPP MySQL (sanjay_portfolio)" });
        loadStats();
        loadGallery();
        loadSettings();
        loadInquiries();
      } else {
        setDbStatus({ connected: false, message: "XAMPP MySQL Not Connected (Make sure MySQL is running in XAMPP on port 3306)" });
      }
    } catch {
      setDbStatus({
        connected: false,
        message: "API server offline. Run 'npm run server' or check port 5000."
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      checkHealthAndLoad();
    }
  }, [isAuthenticated]);

  const loadStats = async () => {
    try {
      const res = await fetch(`${API_BASE}/stats`);
      const data = await res.json();
      if (data.success) {
        setStats(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const loadGallery = async () => {
    setGalleryLoading(true);
    try {
      const res = await fetch(`${API_BASE}/gallery`);
      const data = await res.json();
      if (data.success) {
        setGalleryItems(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setGalleryLoading(false);
    }
  };

  const loadSettings = async () => {
    try {
      const res = await fetch(`${API_BASE}/settings`);
      const data = await res.json();
      if (data.success && Object.keys(data.data).length > 0) {
        setSettings((prev) => ({ ...prev, ...data.data }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const loadInquiries = async () => {
    setInquiriesLoading(true);
    try {
      const res = await fetch(`${API_BASE}/inquiries`);
      const data = await res.json();
      if (data.success) {
        setInquiries(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setInquiriesLoading(false);
    }
  };

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        localStorage.setItem("sanjay_admin_auth", "true");
        showToast("success", "Welcome back, Admin!");
        checkHealthAndLoad();
      } else {
        setAuthError(data.message || "Invalid credentials");
      }
    } catch {
      // Offline fallback: Allow local bypass with admin / admin123
      if (username === "admin" && password === "admin123") {
        setIsAuthenticated(true);
        localStorage.setItem("sanjay_admin_auth", "true");
        showToast("success", "Logged in in Local Mode.");
        checkHealthAndLoad();
      } else {
        setAuthError("Could not reach backend server on port 5000.");
      }
    } finally {
      setAuthLoading(false);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("sanjay_admin_auth");
  };

  // Open Gallery Add/Edit Modal
  const openAddGalleryModal = () => {
    setEditingItem(null);
    setFormTitle("");
    setFormCategory("Keynotes & Speaking");
    setFormLocation("Patna, India");
    setFormDate("2026");
    setFormImage("");
    setFormDescription("");
    setFormDetailedStory("");
    setFormHighlights("");
    setIsGalleryModalOpen(true);
  };

  const openEditGalleryModal = (item: GalleryItem) => {
    setEditingItem(item);
    setFormTitle(item.title);
    setFormCategory(item.category);
    setFormLocation(item.location);
    setFormDate(item.date);
    setFormImage(item.image);
    setFormDescription(item.description);
    setFormDetailedStory(item.detailedStory || "");
    setFormHighlights(Array.isArray(item.highlights) ? item.highlights.join(", ") : "");
    setIsGalleryModalOpen(true);
  };

  // Handle Image File Upload
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    setUploadLoading(true);
    try {
      const res = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setFormImage(data.url);
        showToast("success", "Image uploaded successfully!");
      } else {
        showToast("error", data.message || "Upload failed");
      }
    } catch (err) {
      showToast("error", "Failed to upload image to server.");
    } finally {
      setUploadLoading(false);
    }
  };

  // Save Gallery Item
  const handleSaveGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle || !formImage) {
      showToast("error", "Title and image are required!");
      return;
    }

    const payload = {
      title: formTitle,
      category: formCategory,
      location: formLocation,
      date: formDate,
      image: formImage,
      description: formDescription,
      detailedStory: formDetailedStory,
      highlights: formHighlights
        ? formHighlights.split(",").map((s) => s.trim()).filter(Boolean)
        : []
    };

    try {
      if (editingItem) {
        // Update
        const res = await fetch(`${API_BASE}/gallery/${editingItem.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.success) {
          showToast("success", "Gallery item updated!");
          setIsGalleryModalOpen(false);
          loadGallery();
        } else {
          showToast("error", data.message);
        }
      } else {
        // Create
        const res = await fetch(`${API_BASE}/gallery`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.success) {
          showToast("success", "Gallery item created in MySQL!");
          setIsGalleryModalOpen(false);
          loadGallery();
          loadStats();
        } else {
          showToast("error", data.message);
        }
      }
    } catch (err) {
      showToast("error", "Error saving gallery item to database.");
    }
  };

  // Delete Gallery Item
  const handleDeleteGallery = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this photo from the database?")) return;

    try {
      const res = await fetch(`${API_BASE}/gallery/${id}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (data.success) {
        showToast("success", "Gallery item deleted from MySQL!");
        loadGallery();
        loadStats();
      } else {
        showToast("error", data.message);
      }
    } catch {
      showToast("error", "Failed to delete item.");
    }
  };

  // Save Settings
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSaving(true);
    try {
      const res = await fetch(`${API_BASE}/settings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings)
      });
      const data = await res.json();
      if (data.success) {
        setSettingsToast("All site settings saved to XAMPP MySQL successfully!");
        setTimeout(() => setSettingsToast(""), 4000);
        showToast("success", "Settings updated in MySQL database!");
      } else {
        showToast("error", data.message);
      }
    } catch {
      showToast("error", "Error saving settings to MySQL.");
    } finally {
      setSettingsSaving(false);
    }
  };

  // Update Inquiry Status
  const handleUpdateInquiryStatus = async (id: number, status: "new" | "contacted" | "closed") => {
    try {
      const res = await fetch(`${API_BASE}/inquiries/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      });
      const data = await res.json();
      if (data.success) {
        showToast("success", `Inquiry marked as ${status}`);
        loadInquiries();
        loadStats();
      }
    } catch {
      showToast("error", "Failed to update status.");
    }
  };

  // Delete Inquiry
  const handleDeleteInquiry = async (id: number) => {
    if (!window.confirm("Delete this inquiry from database?")) return;
    try {
      const res = await fetch(`${API_BASE}/inquiries/${id}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (data.success) {
        showToast("success", "Inquiry deleted");
        loadInquiries();
        loadStats();
        if (activeInquiryModal?.id === id) setActiveInquiryModal(null);
      }
    } catch {
      showToast("error", "Failed to delete inquiry.");
    }
  };

  // ============================================================
  // RENDER: LOGIN VIEW (if not authenticated)
  // ============================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl text-left space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="w-6 h-0.5 bg-[#E31E24]" />
              <span className="text-xs font-extrabold tracking-widest text-[#E31E24] uppercase">
                ADMIN PORTAL
              </span>
            </div>
            <h1 className="text-2xl font-extrabold text-[#0A2540]">
              Sanjay Kumar Portfolio
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Sign in to manage Gallery, Contact Inquiries, and Site Settings.
            </p>

            {/* 4-Color Accent Line */}
            <div className="flex items-center h-1 w-32 mt-3 rounded-full overflow-hidden">
              <span className="h-full w-1/4 bg-[#E31E24]" />
              <span className="h-full w-1/4 bg-[#22C55E]" />
              <span className="h-full w-1/4 bg-[#1677FF]" />
              <span className="h-full w-1/4 bg-[#F59E0B]" />
            </div>
          </div>

          {authError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24]"
                  placeholder="admin"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#E31E24] focus:ring-1 focus:ring-[#E31E24]"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3 bg-[#E31E24] hover:bg-[#C8171D] text-white font-bold rounded-xl text-sm shadow-md transition-colors cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {authLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Connecting...</span>
                </>
              ) : (
                <span>Sign In to Dashboard</span>
              )}
            </button>
          </form>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Database: XAMPP MySQL</span>
            <span>Default: admin / admin123</span>
          </div>

          <div className="text-center pt-1">
            <Link to="/" className="text-xs font-semibold text-[#1677FF] hover:underline inline-flex items-center">
              <span>Back to Public Website</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // RENDER: AUTHENTICATED ADMIN DASHBOARD VIEW
  // ============================================================
  const filteredGallery = galleryItems.filter((item) => {
    const q = gallerySearch.toLowerCase();
    return (
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-xl shadow-xl flex items-center space-x-2 text-sm font-bold text-white transition-all ${
            toast.type === "success" ? "bg-emerald-600" : "bg-red-600"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle2 className="w-5 h-5 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 shrink-0" />
          )}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Top Admin Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#E31E24] text-white flex items-center justify-center font-extrabold text-lg shadow-sm">
              S
            </div>
            <div>
              <h2 className="text-base font-extrabold text-[#0A2540] leading-none">
                Sanjay Kumar Admin
              </h2>
              <span className="text-[11px] font-semibold text-slate-500">
                Portfolio CMS &amp; XAMPP Database
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Database indicator */}
            <div
              className={`hidden sm:flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                dbStatus.connected
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-amber-50 text-amber-700 border-amber-200"
              }`}
              title={dbStatus.message}
            >
              <Database className="w-3.5 h-3.5" />
              <span>{dbStatus.connected ? "MySQL Connected" : "MySQL Offline"}</span>
            </div>

            <Link
              to="/"
              target="_blank"
              className="text-xs font-bold text-slate-600 hover:text-[#0A2540] flex items-center space-x-1 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <span>View Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleLogout}
              className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center space-x-1 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar Tabs */}
          <aside className="lg:col-span-3 space-y-1.5 bg-white p-3 rounded-2xl border border-slate-200/90 shadow-2xs">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-left cursor-pointer ${
                activeTab === "overview"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard Overview</span>
            </button>

            <button
              onClick={() => setActiveTab("gallery")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-left cursor-pointer ${
                activeTab === "gallery"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center space-x-3">
                <ImageIcon className="w-4 h-4" />
                <span>Gallery Manager</span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                activeTab === "gallery" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700"
              }`}>
                {galleryItems.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-left cursor-pointer ${
                activeTab === "settings"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <SettingsIcon className="w-4 h-4" />
              <span>Site Settings</span>
            </button>

            <button
              onClick={() => setActiveTab("inquiries")}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-left cursor-pointer ${
                activeTab === "inquiries"
                  ? "bg-[#0A2540] text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div className="flex items-center space-x-3">
                <Inbox className="w-4 h-4" />
                <span>Inquiries &amp; Leads</span>
              </div>
              {stats.newInquiries > 0 && (
                <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-[#E31E24] text-white">
                  {stats.newInquiries}
                </span>
              )}
            </button>
          </aside>

          {/* Main Area */}
          <main className="lg:col-span-9 space-y-6 text-left">
            
            {/* Database Alert Banner if Offline */}
            {!dbStatus.connected && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start space-x-3 text-amber-900 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-bold block">XAMPP MySQL Notice</span>
                  <p className="text-amber-700">
                    {dbStatus.message}
                  </p>
                  <p className="text-amber-800 font-semibold pt-1">
                    To start MySQL: Open <strong>XAMPP Control Panel</strong> and click <strong>Start</strong> next to MySQL. Make sure the Node server is running with <code>npm run server</code>.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 1: OVERVIEW */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#0A2540]">
                    System Overview
                  </h1>
                  <p className="text-xs text-slate-500">
                    Manage your portfolio content stored in XAMPP MySQL database.
                  </p>
                </div>

                {/* Counter Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Total Gallery Photos
                    </span>
                    <span className="text-3xl font-extrabold text-[#0A2540] block">
                      {galleryItems.length}
                    </span>
                    <span className="text-[11px] text-emerald-600 font-semibold">
                      Stored in `gallery_items`
                    </span>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Contact Inquiries
                    </span>
                    <span className="text-3xl font-extrabold text-[#0A2540] block">
                      {inquiries.length}
                    </span>
                    <span className="text-[11px] text-blue-600 font-semibold">
                      {stats.newInquiries} unread / new
                    </span>
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-1">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Database Engine
                    </span>
                    <span className="text-lg font-extrabold text-[#0A2540] block truncate">
                      XAMPP MySQL
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      DB: sanjay_portfolio
                    </span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                  <h3 className="text-base font-bold text-[#0A2540]">Quick Management</h3>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => { setActiveTab("gallery"); openAddGalleryModal(); }}
                      className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#E31E24] hover:bg-[#C8171D] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add New Gallery Photo</span>
                    </button>

                    <button
                      onClick={() => setActiveTab("settings")}
                      className="inline-flex items-center space-x-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0A2540] rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Phone className="w-4 h-4 text-[#E31E24]" />
                      <span>Update Contact &amp; Phone Number</span>
                    </button>

                    <button
                      onClick={() => setActiveTab("inquiries")}
                      className="inline-flex items-center space-x-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0A2540] rounded-xl text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Inbox className="w-4 h-4 text-[#1677FF]" />
                      <span>View Recent Inquiries ({inquiries.length})</span>
                    </button>
                  </div>
                </div>

                {/* Recent Inquiries Preview */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-[#0A2540]">Recent Contact Submissions</h3>
                    <button
                      onClick={() => setActiveTab("inquiries")}
                      className="text-xs font-bold text-[#1677FF] hover:underline"
                    >
                      View All →
                    </button>
                  </div>

                  {inquiries.length === 0 ? (
                    <p className="text-xs text-slate-500 py-4 text-center">
                      No contact inquiries received yet. Form submissions on the Contact page will appear here.
                    </p>
                  ) : (
                    <div className="divide-y divide-slate-100">
                      {inquiries.slice(0, 3).map((inq) => (
                        <div key={inq.id} className="py-3 flex items-center justify-between">
                          <div>
                            <span className="text-sm font-bold text-[#0A2540] block">{inq.name}</span>
                            <span className="text-xs text-slate-500">{inq.email} • {inq.service}</span>
                          </div>
                          <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                            inq.status === "new" ? "bg-red-50 text-[#E31E24]" : "bg-slate-100 text-slate-600"
                          }`}>
                            {inq.status.toUpperCase()}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: GALLERY MANAGER */}
            {activeTab === "gallery" && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-extrabold text-[#0A2540]">
                      Gallery Manager
                    </h1>
                    <p className="text-xs text-slate-500">
                      Add, edit, or delete photos that appear on the public Gallery page.
                    </p>
                  </div>

                  <button
                    onClick={openAddGalleryModal}
                    className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#E31E24] hover:bg-[#C8171D] text-white rounded-xl text-xs font-bold shadow-sm transition-colors cursor-pointer self-start sm:self-auto"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Photo</span>
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-sm">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search gallery photos..."
                    value={gallerySearch}
                    onChange={(e) => setGallerySearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#E31E24]"
                  />
                </div>

                {/* Gallery List Table / Cards */}
                {galleryLoading ? (
                  <div className="text-center py-12 text-slate-400 text-xs">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2" />
                    Loading gallery items from MySQL...
                  </div>
                ) : filteredGallery.length === 0 ? (
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-500 text-xs">
                    No gallery photos found. Click "Add New Photo" to create one.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredGallery.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-2xl border border-slate-200 p-4 flex space-x-4 shadow-2xs hover:border-slate-300 transition-colors"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-24 h-24 rounded-xl object-cover shrink-0 bg-slate-100"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "./images/gallery/gallery-keynote-ai.jpg";
                          }}
                        />

                        <div className="flex-1 min-w-0 space-y-1">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 inline-block">
                            {item.category}
                          </span>
                          <h4 className="text-sm font-bold text-[#0A2540] truncate">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 truncate">
                            {item.location} • {item.date}
                          </p>

                          {/* Action Buttons */}
                          <div className="flex items-center space-x-2 pt-2">
                            <button
                              onClick={() => openEditGalleryModal(item)}
                              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold rounded-lg transition-colors cursor-pointer flex items-center space-x-1"
                            >
                              <Edit3 className="w-3 h-3" />
                              <span>Edit</span>
                            </button>
                            <button
                              onClick={() => handleDeleteGallery(item.id)}
                              className="px-2.5 py-1 bg-red-50 hover:bg-red-100 text-red-600 text-[11px] font-bold rounded-lg transition-colors cursor-pointer flex items-center space-x-1"
                            >
                              <Trash2 className="w-3 h-3" />
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            )}

            {/* TAB 3: SITE SETTINGS (IMPORTANT THINGS) */}
            {activeTab === "settings" && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-extrabold text-[#0A2540]">
                    Site Settings &amp; Important Details
                  </h1>
                  <p className="text-xs text-slate-500">
                    Change key business information stored in XAMPP MySQL. Updates reflect across the website.
                  </p>
                </div>

                {settingsToast && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-bold flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{settingsToast}</span>
                  </div>
                )}

                <form onSubmit={handleSaveSettings} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs space-y-6">
                  
                  {/* Section 1: Contact Channels */}
                  <div className="space-y-4">
                    <div className="border-b border-slate-100 pb-2">
                      <h3 className="text-sm font-extrabold text-[#0A2540] uppercase tracking-wider">
                        1. Direct Contact Channels
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          value={settings.phone || ""}
                          onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          WhatsApp Number
                        </label>
                        <input
                          type="text"
                          value={settings.whatsappNumber || ""}
                          onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={settings.email || ""}
                          onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Base Location / City
                        </label>
                        <input
                          type="text"
                          value={settings.location || ""}
                          onChange={(e) => setSettings({ ...settings, location: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Profile & Brand */}
                  <div className="space-y-4 pt-4">
                    <div className="border-b border-slate-100 pb-2">
                      <h3 className="text-sm font-extrabold text-[#0A2540] uppercase tracking-wider">
                        2. Profile &amp; Brand Positioning
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Consultant Name
                        </label>
                        <input
                          type="text"
                          value={settings.name || ""}
                          onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Subtitle / Profession
                        </label>
                        <input
                          type="text"
                          value={settings.subTitle || ""}
                          onChange={(e) => setSettings({ ...settings, subTitle: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Tagline
                        </label>
                        <input
                          type="text"
                          value={settings.tagline || ""}
                          onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                    <button
                      type="submit"
                      disabled={settingsSaving}
                      className="px-6 py-2.5 bg-[#E31E24] hover:bg-[#C8171D] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-colors cursor-pointer flex items-center space-x-2 disabled:opacity-50"
                    >
                      {settingsSaving ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Saving to MySQL...</span>
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4" />
                          <span>Save Settings to Database</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>
            )}

            {/* TAB 4: INQUIRIES & LEADS */}
            {activeTab === "inquiries" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-extrabold text-[#0A2540]">
                      Inquiries &amp; Leads
                    </h1>
                    <p className="text-xs text-slate-500">
                      Messages submitted by visitors on the Contact page.
                    </p>
                  </div>

                  <button
                    onClick={loadInquiries}
                    className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600"
                    title="Refresh"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>

                {inquiriesLoading ? (
                  <div className="text-center py-12 text-slate-400 text-xs">
                    <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2" />
                    Loading inquiries...
                  </div>
                ) : inquiries.length === 0 ? (
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-500 text-xs">
                    No contact inquiries yet. When users submit the Contact form, inquiries will appear here.
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs">
                    <div className="divide-y divide-slate-100">
                      {inquiries.map((inq) => (
                        <div key={inq.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-bold text-[#0A2540]">{inq.name}</span>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                inq.status === "new"
                                  ? "bg-red-50 text-[#E31E24]"
                                  : inq.status === "contacted"
                                  ? "bg-blue-50 text-[#1677FF]"
                                  : "bg-emerald-50 text-emerald-600"
                              }`}>
                                {inq.status.toUpperCase()}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600">
                              <strong>Email:</strong> {inq.email} | <strong>Phone:</strong> {inq.phone || "N/A"}
                            </p>
                            <p className="text-xs text-slate-500">
                              <strong>Service:</strong> {inq.service} | <strong>Company:</strong> {inq.company || "N/A"}
                            </p>
                            <p className="text-xs text-slate-700 italic pt-1 line-clamp-1">
                              "{inq.message}"
                            </p>
                          </div>

                          <div className="flex items-center space-x-2 shrink-0">
                            <button
                              onClick={() => setActiveInquiryModal(inq)}
                              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center space-x-1"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>View</span>
                            </button>

                            <button
                              onClick={() =>
                                handleUpdateInquiryStatus(
                                  inq.id,
                                  inq.status === "new" ? "contacted" : "closed"
                                )
                              }
                              className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-[#1677FF] text-xs font-bold rounded-lg transition-colors cursor-pointer"
                            >
                              {inq.status === "new" ? "Mark Contacted" : "Mark Closed"}
                            </button>

                            <button
                              onClick={() => handleDeleteInquiry(inq.id)}
                              className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

          </main>
        </div>
      </div>

      {/* ========================================================
          MODAL: ADD / EDIT GALLERY ITEM
          ======================================================== */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-5 text-left shadow-2xl relative">
            <button
              onClick={() => setIsGalleryModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-xl font-extrabold text-[#0A2540]">
                {editingItem ? "Edit Gallery Photo" : "Add New Gallery Photo"}
              </h3>
              <p className="text-xs text-slate-500">
                This image will be saved to XAMPP MySQL and displayed on `/gallery`.
              </p>
            </div>

            <form onSubmit={handleSaveGallery} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Photo Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Keynote Address on AI Systems"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Category *
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                  >
                    <option value="Keynotes & Speaking">Keynotes &amp; Speaking</option>
                    <option value="Corporate Workshops">Corporate Workshops</option>
                    <option value="Client Visits & Consulting">Client Visits &amp; Consulting</option>
                    <option value="Industry Summits & Awards">Industry Summits &amp; Awards</option>
                    <option value="Mentorship & Moments">Mentorship &amp; Moments</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Date
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. March 2026"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. New Delhi, India"
                  value={formLocation}
                  onChange={(e) => setFormLocation(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                />
              </div>

              {/* Image Input + Upload Option */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700">
                  Image Path / URL *
                </label>
                <input
                  type="text"
                  required
                  placeholder="./images/gallery/... or URL"
                  value={formImage}
                  onChange={(e) => setFormImage(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                />

                {/* Upload File Input */}
                <div className="flex items-center space-x-2 pt-1">
                  <label className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg cursor-pointer inline-flex items-center space-x-1.5 transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload Image File</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                  {uploadLoading && <span className="text-xs text-slate-400">Uploading...</span>}
                </div>

                {formImage && (
                  <div className="mt-2 w-full h-32 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img src={formImage} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Brief note about this moment..."
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Key Highlights (comma-separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 400+ Leaders, High ROI, Keynote"
                  value={formHighlights}
                  onChange={(e) => setFormHighlights(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-[#E31E24]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#E31E24] hover:bg-[#C8171D] text-white rounded-xl text-xs font-bold cursor-pointer"
                >
                  {editingItem ? "Update Photo" : "Add Photo to Database"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          MODAL: VIEW FULL INQUIRY
          ======================================================== */}
      {activeInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-4 text-left shadow-2xl relative">
            <button
              onClick={() => setActiveInquiryModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase">
                Inquiry #{activeInquiryModal.id}
              </span>
              <h3 className="text-xl font-extrabold text-[#0A2540] mt-1">
                {activeInquiryModal.name}
              </h3>
            </div>

            <div className="space-y-2 text-xs text-slate-600 border-y border-slate-100 py-3">
              <p><strong>Email:</strong> {activeInquiryModal.email}</p>
              <p><strong>Phone:</strong> {activeInquiryModal.phone || "Not provided"}</p>
              <p><strong>Company:</strong> {activeInquiryModal.company || "Not provided"}</p>
              <p><strong>Service Requested:</strong> {activeInquiryModal.service}</p>
              <p><strong>Date:</strong> {activeInquiryModal.created_at}</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-800">Message / Challenge:</span>
              <p className="text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-xl leading-relaxed whitespace-pre-wrap">
                {activeInquiryModal.message}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <a
                  href={`mailto:${activeInquiryModal.email}`}
                  className="px-3 py-1.5 bg-[#E31E24] text-white text-xs font-bold rounded-lg hover:bg-[#C8171D]"
                >
                  Reply Email
                </a>
                {activeInquiryModal.phone && (
                  <a
                    href={`https://wa.me/${activeInquiryModal.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#25D366] text-white text-xs font-bold rounded-lg"
                  >
                    WhatsApp
                  </a>
                )}
              </div>

              <button
                onClick={() => handleDeleteInquiry(activeInquiryModal.id)}
                className="text-xs text-red-500 hover:underline font-bold"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Admin;
