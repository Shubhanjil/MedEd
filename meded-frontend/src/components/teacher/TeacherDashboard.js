import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { 
  LayoutDashboard, 
  BookOpen, 
  Database, 
  BarChart3, 
  Users, 
  UserCircle, 
  Settings, 
  Search, 
  Bell, 
  Plus, 
  Upload, 
  GraduationCap,
  LogOut,
  ChevronRight,
  AlertCircle,
  PanelLeft
} from 'lucide-react';
import '../../css/TeacherDashboard.css';

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout clicked...");
    
    // Clear all storage
    localStorage.clear();
    sessionStorage.clear();
    
    // Clear any authentication cookies
    document.cookie.split(";").forEach(cookie => {
      const name = cookie.split("=")[0].trim();
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
    
    console.log("Storage cleared, navigating to /");
    
    // Use both navigation methods for reliability
    navigate('/', { replace: true });
    
    // Force a full page reload to ensure complete reset
    setTimeout(() => {
      window.location.href = '/';
      window.location.reload();
    }, 50);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-section">
          <div className="logo-icon"><GraduationCap size={24} color="white" /></div>
          <div>
            <h1 className="logo-text">MedEd</h1>
            <p className="logo-subtext">Learning Platform</p>
          </div>
        </div>

        <nav className="nav-menu">
          <p className="nav-label">Navigation</p>
          <a href="#" className="nav-item active"><LayoutDashboard size={20} /> Dashboard</a>
          <a href="#" className="nav-item"><BookOpen size={20} /> Content Management</a>
          <a href="#" className="nav-item"><Database size={20} /> Test Bank</a>
          <a href="#" className="nav-item"><BarChart3 size={20} /> Analytics</a>
          <a href="#" className="nav-item"><Users size={20} /> Student Management</a>
          
          <p className="nav-label" style={{marginTop: '20px'}}>Account</p>
          <a href="#" className="nav-item"><UserCircle size={20} /> Profile</a>
          <a href="#" className="nav-item"><Settings size={20} /> Settings</a>
        </nav>

        <div className="user-profile-card">
          <div className="avatar">DMC</div>
          <div className="user-info">
            <p className="user-name">Dr. Michael Ch...</p>
            <p className="user-role">Teacher</p>
          </div>
          
          {/* --- FIXED LOGOUT BUTTON --- */}
          {/* We wrap the icon in a button to ensure the click registers */}
          <button 
            onClick={handleLogout} 
            className="logout-btn"
            title="Logout"
            style={{ 
                background: 'transparent', 
                border: 'none', 
                cursor: 'pointer', 
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
          >
            <LogOut size={18} className="logout-icon" />
          </button>
          {/* --------------------------- */}

        </div>
      </aside>

      {/* Main Area */}
      <main className="main-content">
        <header className="top-bar">
            <div className="top-bar-left">
                <button className="sidebar-toggle">
                <PanelLeft size={20} strokeWidth={1.5} />
                </button>
                <div className="search-container">
                <Search size={18} className="search-icon" strokeWidth={1.5} />
                <input type="text" placeholder="Search courses, topics..." />
                </div>
            </div>
            
            <div className="top-bar-right">
                <div className="notification-bell">
                <Bell size={22} strokeWidth={1.5} />
                <span className="notification-badge">3</span>
                </div>
                <div className="user-profile-header">
                <p className="dr-name">Dr. Michael Chen</p>
                <p className="dr-role">Teacher</p>
                </div>
            </div>
        </header>

        <div className="content-body">
          <div className="welcome-header">
            <div>
              <h2 className="welcome-title">Welcome, Dr. Michael Chen</h2>
              <p className="welcome-subtitle">Here's what's happening with your classes today.</p>
            </div>
            <div className="header-buttons">
              <button className="btn-secondary"><Plus size={18} /> Invite Students</button>
              <button className="btn-secondary"><Upload size={18} /> Upload Material</button>
              <button className="btn-primary"><Plus size={18} /> Create Test</button>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon blue"><Users size={20} /></div>
              <div className="stat-data">
                <p className="stat-label">Total Students</p>
                <h3 className="stat-value">156</h3>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon green"><Users size={20} /></div>
              <div className="stat-data">
                <p className="stat-label">Active Students</p>
                <h3 className="stat-value">142</h3>
                <span className="stat-subtext">91% engagement</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon orange"><Users size={20} /></div>
              <div className="stat-data">
                <p className="stat-label">Inactive Students</p>
                <h3 className="stat-value">14</h3>
                <span className="stat-subtext">No activity in 7 days</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon gray"><AlertCircle size={20} /></div>
              <div className="stat-data">
                <p className="stat-label">Pending Reviews</p>
                <h3 className="stat-value">8</h3>
                <span className="stat-subtext">Need grading</span>
              </div>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="left-column">
              <div className="card attention-card">
                <div className="card-header">
                  <h4><BarChart3 size={18} color="#f87171" /> Topics Needing Attention</h4>
                  <a href="#" className="view-analytics">View analytics <ChevronRight size={14} /></a>
                </div>
                <div className="topic-list">
                  <TopicItem title="Heart Valves Function" avg="45" students="32" />
                  <TopicItem title="Neural Pathways" avg="52" students="28" />
                  <TopicItem title="Kidney Filtration" avg="58" students="25" />
                </div>
              </div>

              <div className="bottom-row">
                 <div className="small-stat-card">
                    <div className="stat-icon-square blue"><BarChart3 size={20} /></div>
                    <div>
                      <h3 className="stat-value">73%</h3>
                      <p className="stat-label">Class Average Score</p>
                    </div>
                 </div>
                 <div className="small-stat-card">
                    <div className="stat-icon-square green"><BookOpen size={20} /></div>
                    <div>
                      <h3 className="stat-value">24</h3>
                      <p className="stat-label">Topics Published</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="right-column">
              <div className="card submissions-card">
                <h4>Recent Submissions</h4>
                <div className="submission-list">
                  <SubmissionItem name="Sarah Johnson" type="Test" task="Cardiovascular Quiz" time="2h ago" />
                  <SubmissionItem name="Mike Chen" type="Assignment" task="Anatomy Essay" time="4h ago" />
                  <SubmissionItem name="Emily Davis" type="Assignment" task="Case Study Analysis" time="5h ago" status="graded" />
                </div>
                <a href="#" className="view-all">View all submissions <ChevronRight size={14} /></a>
              </div>

              <div className="alert-card">
                <div className="alert-icon"><AlertCircle size={20} /></div>
                <div className="alert-content">
                  <p className="alert-title">System Alert</p>
                  <p className="alert-text">5 students haven't completed VARK assessment. Consider sending a reminder.</p>
                  <button className="alert-link">Send Reminder</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const TopicItem = ({ title, avg, students }) => (
  <div className="topic-item">
    <div className="topic-icon"><BookOpen size={16} color="#f87171" /></div>
    <div className="topic-details">
      <div className="topic-row">
        <span className="topic-title">{title}</span>
        <span className="student-count">{students} students</span>
      </div>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${avg}%` }}></div>
        <span className="progress-label">{avg}% avg</span>
      </div>
    </div>
  </div>
);

const SubmissionItem = ({ name, type, task, time, status }) => (
  <div className="submission-item">
    <div className="submission-info">
      <p className="sub-name"> {name}</p>
      <p className="sub-task">{task}</p>
      <div className="sub-meta">
        <span className="sub-badge">{type}</span>
        <span className="sub-time">{time}</span>
      </div>
    </div>
    {status !== 'graded' && <button className="grade-btn">Grade</button>}
  </div>
);

export default TeacherDashboard;