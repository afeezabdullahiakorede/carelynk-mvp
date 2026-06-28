import { useState } from 'react';

export default function ParentFlow({ isOpen, onClose }) {
  // Views: 1 = Dashboard, 2 = Child Profile, 3 = Assign Hospital
  const [view, setView] = useState(1);
  const [activeChild, setActiveChild] = useState(null);

  if (!isOpen) return null;

  // Mock Data
  const children = [
    { id: 1, name: 'Michael', age: 8, hospital: 'Lagoon Hospital' },
    { id: 2, name: 'Sarah', age: 5, hospital: 'Reddington Hospital' }
  ];

  return (
    <div className="full-screen-modal">
      
      {/* --- SCREEN 16: PARENT DASHBOARD --- */}
      {view === 1 && (
        <>
          <div className="modal-header">
            <button className="back-btn" onClick={onClose}>←</button>
            <h2 style={{ fontSize: '18px', margin: 0 }}>Family Dashboard</h2>
            <div style={{ width: '24px' }}></div>
          </div>
          
          <div className="modal-body">
            <div className="welcome-banner" style={{ marginBottom: '24px' }}>
              <h1 style={{ fontSize: '24px', margin: '0 0 4px 0', color: 'var(--text-dark)' }}>Welcome, Parent 👋</h1>
              <p style={{ margin: 0, color: '#64748B', fontSize: '14px' }}>Manage your dependents' healthcare.</p>
            </div>

            <div className="section-title" style={{ marginBottom: '12px' }}>Children</div>
            <div className="child-list">
              {children.map(child => (
                <div 
                  key={child.id} 
                  className="child-card"
                  onClick={() => {
                    setActiveChild(child);
                    setView(2);
                  }}
                >
                  <div className="child-avatar">👤</div>
                  <div className="child-info">
                    <h4>{child.name}</h4>
                    <p>Age {child.age} • {child.hospital}</p>
                  </div>
                  <span className="arrow">›</span>
                </div>
              ))}
            </div>
            
            <button 
              className="btn-outline-primary" 
              style={{ width: '100%', marginTop: '16px', borderStyle: 'dashed' }}
              onClick={() => setView(3)}
            >
              + Add Child
            </button>

            <div className="section-title" style={{ marginTop: '30px', marginBottom: '12px' }}>Upcoming Appointments</div>
            <section className="appointment-card modern-card">
              <div className="card-top-row">
                <span className="top-label">👦 Michael • Lagoon Hospital</span>
              </div>
              <div className="card-main-info">
                <h3>Dr. Bassey</h3>
                <p className="sub-text">Pediatrics</p>
                <p className="date-time"><strong>22 May 2026 • 11:00 AM</strong></p>
              </div>
            </section>
          </div>
        </>
      )}

      {/* --- SCREEN 17: CHILD PROFILE --- */}
      {view === 2 && activeChild && (
        <>
          <div className="modal-header">
            <button className="back-btn" onClick={() => setView(1)}>←</button>
            <h2 style={{ fontSize: '18px', margin: 0 }}>Child Profile</h2>
            <div style={{ width: '24px' }}></div>
          </div>
          
          <div className="modal-body">
            <div className="profile-header-center">
              <div className="avatar-large">👤</div>
              <h3>{activeChild.name}</h3>
              <p>Age {activeChild.age}</p>
            </div>

            <div className="modern-card" style={{ padding: 0, marginTop: '24px', overflow: 'hidden' }}>
              <div className="list-row">
                <div>
                  <strong>Health Summary</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#64748B' }}>No active conditions</p>
                </div>
              </div>
              <div className="list-row" onClick={() => alert('Opening Vaccinations...')}>
                <div>
                  <strong>Vaccination Records</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#64748B' }}>Up to date</p>
                </div>
                <span className="arrow">›</span>
              </div>
              <div className="list-row">
                <div>
                  <strong>Last Checkup</strong>
                  <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#64748B' }}>18 May 2026</p>
                </div>
                <span className="arrow">›</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '30px' }}>
              <button className="btn-outline-primary" style={{ flex: 1 }}>View History</button>
              <button className="btn-primary" style={{ flex: 1 }}>Book Appt.</button>
            </div>
            
            <button 
              className="btn-outline-primary" 
              style={{ width: '100%', marginTop: '24px', border: 'none', color: '#64748B' }}
              onClick={() => setView(3)}
            >
              Change Preferred Hospital
            </button>
          </div>
        </>
      )}

      {/* --- SCREEN 18: ASSIGN HOSPITAL --- */}
      {view === 3 && (
        <>
          <div className="modal-header">
            <button className="back-btn" onClick={() => setView(1)}>←</button>
            <h2 style={{ fontSize: '18px', margin: 0 }}>Assign Hospital</h2>
            <div style={{ width: '24px' }}></div>
          </div>
          
          <div className="modal-body">
            <div className="search-bar-fake" style={{ marginBottom: '24px' }}>
              <span>🔍</span>
              <input type="text" placeholder="Search hospital..." disabled />
            </div>

            <div className="radio-list">
              <label className="radio-item">
                <input type="radio" name="hospital" defaultChecked />
                <div className="radio-content">
                  <strong>St. Nicholas Hospital</strong>
                  <p>Lagos Island</p>
                </div>
              </label>
              
              <label className="radio-item">
                <input type="radio" name="hospital" />
                <div className="radio-content">
                  <strong>Reddington Hospital</strong>
                  <p>Victoria Island</p>
                </div>
              </label>

              <label className="radio-item">
                <input type="radio" name="hospital" />
                <div className="radio-content">
                  <strong>Lagoon Hospital</strong>
                  <p>Ikeja, Lagos</p>
                </div>
              </label>
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%', marginTop: '40px' }}
              onClick={() => {
                alert('Hospital assigned successfully!');
                setView(1);
              }}
            >
              Save Preference
            </button>
          </div>
        </>
      )}

    </div>
  );
}