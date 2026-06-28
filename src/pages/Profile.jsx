import { useState } from 'react';
import ParentFlow from '../components/ParentFlow'; // <-- 1. Import the flow

export default function Profile({ onLogout }) {
  // <-- 2. Add state for the modal
  const [isParentFlowOpen, setIsParentFlowOpen] = useState(false);

  return (
    <div className="page-layout">
      <div className="page-header" style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '24px', margin: 0 }}>Profile</h2>
      </div>

      <div className="profile-header-center" style={{ marginBottom: '30px' }}>
        <div className="avatar-large" style={{ backgroundColor: '#F1F5F9' }}>🧑</div>
        <h3>John Doe</h3>
        <p>john.doe@example.com</p>
      </div>

      {/* --- NEW: Family Gateway --- */}
      <div className="section-title" style={{ marginBottom: '12px' }}>Account Types</div>
      <div className="modern-card" style={{ padding: 0, marginBottom: '24px', overflow: 'hidden' }}>
        <div 
          className="list-row" 
          style={{ backgroundColor: '#F8FAFC' }}
          onClick={() => setIsParentFlowOpen(true)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '24px' }}>👨‍👩‍👧‍👦</span>
            <div>
              <strong>Family & Dependents</strong>
              <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#64748B' }}>Manage your children's healthcare</p>
            </div>
          </div>
          <span className="arrow" style={{ color: 'var(--primary-blue)' }}>›</span>
        </div>
      </div>

      {/* Settings List */}
      <div className="section-title" style={{ marginBottom: '12px' }}>Settings</div>
      <div className="modern-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div className="list-row">
          <strong>Personal Information</strong>
          <span className="arrow">›</span>
        </div>
        <div className="list-row">
          <strong>Notifications</strong>
          <span className="arrow">›</span>
        </div>
        <div className="list-row">
          <strong>Security & Password</strong>
          <span className="arrow">›</span>
        </div>
      </div>

      {/* Logout Action */}
      <button 
        className="btn-danger" 
        style={{ marginTop: '30px', width: '100%', padding: '16px', backgroundColor: '#FEE2E2', color: '#DC2626', border: 'none', borderRadius: '12px', fontWeight: '700', fontSize: '15px' }}
        onClick={onLogout}
      >
        Log Out
      </button>

      {/* --- 3. Drop the Modal at the bottom --- */}
      <ParentFlow 
        isOpen={isParentFlowOpen} 
        onClose={() => setIsParentFlowOpen(false)} 
      />
    </div>
  );
}