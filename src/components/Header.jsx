import { useState } from 'react';

export default function Header({ setActiveTab }) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header style={{ 
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
      padding: '16px 20px', backgroundColor: 'var(--white)', borderBottom: '1px solid #E2E8F0',
      position: 'sticky', top: 0, zIndex: 100
    }}>
      
      {/* Logo & Tagline matching your screenshot */}
      <div>
        <h1 style={{ color: 'var(--primary-blue)', margin: 0, fontSize: '26px', letterSpacing: '-0.5px' }}>
          Carelynk
        </h1>
        <p style={{ margin: 0, fontSize: '12px', color: '#64748B', fontWeight: '500' }}>
          Smart Access to Care
        </p>
      </div>

      {/* Header Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        
        {/* Notification Bell with Dropdown */}
        <div style={{ position: 'relative' }}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)} 
            style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', padding: 0 }}
          >
            🔔
          </button>
          {/* Red Notification Dot */}
          <span style={{ position: 'absolute', top: '0px', right: '0px', width: '10px', height: '10px', backgroundColor: '#EF4444', borderRadius: '50%', border: '2px solid white' }}></span>

          {/* Dropdown Modal */}
          {showNotifications && (
            <div className="modern-card" style={{ 
              position: 'absolute', right: '-10px', top: '40px', width: '260px', 
              padding: '16px', zIndex: 200, boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              animation: 'slideUp 0.2s ease-out'
            }}>
              <h4 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>Notifications (2)</h4>
              
              <div style={{ padding: '10px 0', borderBottom: '1px solid #F1F5F9', cursor: 'pointer' }}>
                <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text-dark)' }}>📅 Appointment Tomorrow</strong>
                <span style={{ fontSize: '12px', color: '#64748B' }}>Dr. Adeyemi at 10:00 AM</span>
              </div>
              
              <div style={{ padding: '10px 0', cursor: 'pointer' }}>
                <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text-dark)' }}>💊 Medication Reminder</strong>
                <span style={{ fontSize: '12px', color: '#64748B' }}>Time to take Amlodipine 5mg</span>
              </div>
            </div>
          )}
        </div>

        {/* Clickable Profile Avatar */}
        <div 
          onClick={() => setActiveTab('Profile')} 
          style={{ 
            width: '42px', height: '42px', borderRadius: '50%', 
            backgroundColor: '#E2E8F0', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', fontSize: '24px', cursor: 'pointer' 
          }}
        >
          🧑🏽‍🦱
        </div>

      </div>
    </header>
  );
}