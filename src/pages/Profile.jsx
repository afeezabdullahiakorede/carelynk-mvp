export default function Profile({ onLogout }) {
  return (
    <div className="page-layout">
      <div className="page-header">
        <h2>My Profile</h2>
      </div>

      {/* User Information Card */}
      <div className="profile-card">
        <div className="profile-avatar-large">👤</div>
        <div className="profile-info">
          <h3>Sarah Jenkins</h3>
          <p>+234 800 123 4567</p>
          <span className="patient-id">Patient ID: #CYK-8992</span>
        </div>
      </div>

      {/* Account Settings List */}
      <div className="section-title" style={{ marginTop: '10px' }}>Settings</div>
      <div className="settings-list">
        <button className="setting-item">
          <span className="setting-icon">🔔</span>
          <div className="setting-text">
            <h4>Notifications & Reminders</h4>
            <p>Manage SMS and app alerts</p>
          </div>
          <span className="arrow">➡️</span>
        </button>

        <button className="setting-item">
          <span className="setting-icon">🏥</span>
          <div className="setting-text">
            <h4>Linked Clinics</h4>
            <p>Manage your healthcare providers</p>
          </div>
          <span className="arrow">➡️</span>
        </button>

        <button className="setting-item">
          <span className="setting-icon">🔒</span>
          <div className="setting-text">
            <h4>Privacy & Security</h4>
            <p>Password and data settings</p>
          </div>
          <span className="arrow">➡️</span>
        </button>
      </div>

      {/* Logout Action */}
      <button 
        className="btn-danger" 
        style={{ marginTop: '20px' }}
        onClick={onLogout}
      >
        Log Out
      </button>

    </div>
  );
}