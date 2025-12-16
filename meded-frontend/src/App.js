import React, { useState } from 'react';
import './App.css';
import StudentDashboard from './StudentDashboard';
import { BookOpen, Stethoscope, GraduationCap } from 'lucide-react';

function App() {
  // --- 1. State Variables ---
  const [token, setToken] = useState(localStorage.getItem('accessToken'));
  const [showPasswordReset, setShowPasswordReset] = useState(false); // <--- This was missing
  const [newPassword, setNewPassword] = useState('');
  
  const [userType, setUserType] = useState('student');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // --- 2. Helper Functions ---
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setToken(null);
    setShowPasswordReset(false);
  };

  // --- 3. Login Handler ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // A. Login to get Token
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        const accessToken = data.access;
        
        // B. Fetch User Profile using the new token
        const profileResponse = await fetch('http://127.0.0.1:8000/api/user-profile/', {
            method: 'GET',
            headers: { 
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });
        
        if (profileResponse.ok) {
            const profileData = await profileResponse.json();
            
            // C. Check the "must_change_password" flag
            if (profileData.must_change_password) {
                // If true, save token temporarily but SHOW RESET SCREEN
                setToken(accessToken); 
                setShowPasswordReset(true);
            } else {
                // If false, proceed to Dashboard normally
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            }
        } else {
            alert("Login succeeded but failed to fetch profile.");
        }

      } else {
        alert("❌ Login Failed. Please check credentials.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Could not connect to server.");
    }
  };

  // --- 4. Password Update Handler ---
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://127.0.0.1:8000/api/change-password/', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify({ new_password: newPassword })
        });

        if (response.ok) {
            alert("✅ Password Updated! Please login again.");
            handleLogout();
        } else {
            alert("Failed to update password");
        }
    } catch(err) {
        console.error(err);
    }
  };

  // --- 5. RENDER ---

  // Screen A: Password Reset (Security Check)
  if (showPasswordReset) {
      return (
          <div className="container" style={{justifyContent:'center', alignItems:'center', background:'#F5EDE2'}}>
              <div className="login-card" style={{height:'auto'}}>
                  <h2>Security Update</h2>
                  <p className="subtitle">Please set a new password to continue.</p>
                  <form onSubmit={handlePasswordUpdate}>
                    <div className="input-group">
                        <label>New Password</label>
                        <input 
                            type="password" 
                            value={newPassword} 
                            onChange={e => setNewPassword(e.target.value)} 
                            placeholder="Enter new password"
                        />
                    </div>
                    <button type="submit" className="submit-btn">Update Password</button>
                  </form>
              </div>
          </div>
      )
  }

  // Screen B: Dashboard (Logged In)
  if (token && !showPasswordReset) {
    return <StudentDashboard onLogout={handleLogout} />;
  }

  // Screen C: Login Form (Default)
  return (
    <div className="container">
      {/* Left Side - Branding */}
      <div className="brand-section">
        <div className="logo-container">
          <div className="logo-icon">
            <GraduationCap size={32} color="white" />
          </div>
          <h1>MedEd</h1>
        </div>

        <div className="hero-text">
          <h2>Transform Your <br/> Medical Learning</h2>
          <p>
            Personalized education powered by VARK learning styles. 
            Track your progress, master concepts, excel in your medical career.
          </p>
        </div>

        <div className="features">
          <div className="feature-item">
            <div className="icon-box"><BookOpen size={20} /></div>
            <span>Adaptive learning paths</span>
          </div>
          <div className="feature-item">
            <div className="icon-box"><Stethoscope size={20} /></div>
            <span>Curated Medical Content</span>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="form-section">
        <div className="login-card">
          <h2>Welcome</h2>
          <p className="subtitle">Sign in to continue your learning journey</p>

          <div className="toggle-container">
            <div 
              className={`toggle-btn ${userType === 'student' ? 'active' : ''}`}
              onClick={() => setUserType('student')}
            >
              Student
            </div>
            <div 
              className={`toggle-btn ${userType === 'teacher' ? 'active' : ''}`}
              onClick={() => setUserType('teacher')}
            >
              Teacher
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username / Email</label>
              <input 
                type="text" 
                placeholder="Enter 'student1'" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-group">
              <div className="label-row">
                <label>Password</label>
                <a href="#" className="forgot-link">Forgot Password</a>
              </div>
              <input 
                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="submit-btn">
              Sign in as {userType === 'student' ? 'Student' : 'Teacher'}
            </button>
          </form>
          
          <p className="footer-text">
            Don't have an account? <a href="#">Contact Administrator</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;