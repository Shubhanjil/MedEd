import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  LineChart, 
  FolderOpen, 
  Trophy, 
  User, 
  Settings, 
  Search, 
  Bell, 
  LogOut,
  Play,
  ArrowRight,
  Eye,
  Ear,
  FileText
} from 'lucide-react';
import './StudentDashboard.css';

function StudentDashboard({ onLogout }) {
  return (
    <div className="app-container">
      {/* --- Sidebar --- */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-icon-small">
            <div className="cap-shape"></div>
          </div>
          <div className="brand-text">
            <h3>MedEd</h3>
            <span style={{fontSize: '0.8rem', color: '#888'}}>Learning Platform</span>
          </div>
        </div>

        <div className="nav-section">
          <p className="nav-label">Navigation</p>
          <a href="#" className="nav-item active">
            <LayoutDashboard size={18} /> <span>Dashboard</span>
          </a>
          <a href="#" className="nav-item">
            <BookOpen size={18} /> <span>Courses</span>
          </a>
          <a href="#" className="nav-item">
            <LineChart size={18} /> <span>My Progress</span>
          </a>
          <a href="#" className="nav-item">
            <FolderOpen size={18} /> <span>Resources</span>
          </a>
          <a href="#" className="nav-item">
            <Trophy size={18} /> <span>Leaderboard</span>
          </a>
        </div>

        <div className="nav-section">
          <p className="nav-label">Account</p>
          <a href="#" className="nav-item">
            <User size={18} /> <span>Profile</span>
          </a>
          <a href="#" className="nav-item">
            <Settings size={18} /> <span>Settings</span>
          </a>
        </div>

        <div className="user-mini-profile">
          <div className="mini-avatar">SJ</div>
          <div className="mini-info">
            <h4>Sarah Johnson</h4>
            <span>Student</span>
          </div>
          <button onClick={onLogout} className="mini-logout">
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* --- Main Content --- */}
      <main className="main-content">
        {/* Top Header */}
        <header className="top-header">
          <button className="sidebar-toggle"><LayoutDashboard size={20}/></button>
          
          <div className="search-bar">
            <Search size={18} className="search-icon" color="#888"/>
            <input type="text" placeholder="Search courses, topics..." />
          </div>

          <div className="header-actions">
            <div className="notification-btn">
              <Bell size={20} />
              <span className="badge">3</span>
            </div>
            <div className="user-display">
              <div className="text-right">
                <h4>Sarah Johnson</h4>
                <span>Student</span>
              </div>
              <div className="avatar-small">SJ</div>
            </div>
          </div>
        </header>

        <div className="content-scroll">
          {/* Hero Section */}
          <section className="welcome-banner">
            <div className="welcome-text">
              <h1>Welcome back,<br/>Sarah Johnson</h1>
              <p>MC2024-0142 • Batch 2024-A</p>
            </div>
            <button className="continue-btn">
              Continue Learning <ArrowRight size={18} />
            </button>
          </section>

          {/* Stats Row */}
          <section className="stats-row">
            <div className="stat-card">
              <div className="stat-icon gold"><Trophy size={20} /></div>
              <div>
                <p className="stat-label">Current Rank</p>
                <h3>#12 <span className="green-text">+3%</span></h3>
                <span className="sub-stat">Top 5%</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon purple"><div className="target-dot"></div></div>
              <div>
                <p className="stat-label">Total Points</p>
                <h3>2,450 <span className="green-text">+12%</span></h3>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon green"><BookOpen size={20} /></div>
              <div>
                <p className="stat-label">Topics Completed</p>
                <h3>24</h3>
                <span className="sub-stat">of 86 topics</span>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon grey"><div className="clock-icon"></div></div>
              <div>
                <p className="stat-label">Study Hours</p>
                <h3>32.5h</h3>
                <span className="sub-stat">This week</span>
              </div>
            </div>
          </section>

          {/* Bottom Grid: Learning + Style */}
          <div className="dashboard-grid">
            
            {/* Left: Continue Learning */}
            <div className="learning-section">
              <div className="section-header">
                <h3>Continue Learning</h3>
                <a href="#">View all &gt;</a>
              </div>

              <div className="course-item">
                <div className="play-icon-box">
                  <Play size={20} fill="#FF5A5A" />
                </div>
                <div className="course-info">
                  <h4>Cardiovascular System</h4>
                  <p>Heart Anatomy</p>
                  <div className="progress-bar">
                    <div className="fill" style={{width: '75%'}}></div>
                  </div>
                  <span className="progress-text">9/12</span>
                </div>
              </div>

              <div className="course-item">
                <div className="play-icon-box orange">
                  <Play size={20} fill="#F59E0B" />
                </div>
                <div className="course-info">
                  <h4>Nervous System</h4>
                  <p>Brain Structure</p>
                  <div className="progress-bar">
                    <div className="fill" style={{width: '30%'}}></div>
                  </div>
                  <span className="progress-text">3/10</span>
                </div>
              </div>
            </div>

            {/* Right: Learning Style */}
            <div className="style-section">
              <h3>Your Learning Style</h3>
              <div className="style-card">
                <div className="dominant-style">
                  <div className="eye-icon">
                    <Eye size={24} color="white" />
                  </div>
                  <div>
                    <span style={{opacity: 0.8, fontSize: '0.85rem'}}>Dominant Style</span>
                    <h4 style={{fontSize: '1.2rem'}}>Visual</h4>
                  </div>
                </div>

                <div className="style-list">
                  <div className="style-row">
                    <span style={{display:'flex', gap:'8px', alignItems:'center'}}><Eye size={16}/> Visual</span>
                    <div className="style-bar-bg"><div className="style-bar-fill bar-visual" style={{width: '80%'}}></div></div>
                    <span>8</span>
                  </div>
                  <div className="style-row">
                    <span style={{display:'flex', gap:'8px', alignItems:'center'}}><Ear size={16}/> Aural</span>
                    <div className="style-bar-bg"><div className="style-bar-fill bar-aural" style={{width: '50%'}}></div></div>
                    <span>5</span>
                  </div>
                  <div className="style-row">
                    <span style={{display:'flex', gap:'8px', alignItems:'center'}}><FileText size={16}/> Read/Write</span>
                    <div className="style-bar-bg"><div className="style-bar-fill bar-read" style={{width: '70%'}}></div></div>
                    <span>7</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;