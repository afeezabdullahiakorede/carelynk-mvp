import { useState, useEffect } from 'react';
import VitalsModal from '../components/VitalsModal';
import RescheduleModal from '../components/RescheduleModal';
import { fetchDashboardData } from '../services/api';

export default function Home() {
  const [isVitalsOpen, setIsVitalsOpen] = useState(false);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);

  // --- NEW: State for our API data ---
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  // Trigger the fake API when the dashboard first loads
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true); // Start loading
      const data = await fetchDashboardData(); // Wait for 1.5s
      setDashboardData(data); // Save the data
      setIsLoading(false); // Stop loading
    };
    
    loadData();
  }, []); // The empty array means this only runs once

  // --- LOADING SCREEN UI ---
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Fetching your health data...</p>
      </div>
    );
  }

  // --- RENDER REAL UI ONCE LOADED ---
  return (
    <div className="home-page">
      
      {/* 1. Conditional Appointment Card using FAKE DATA */}
      {dashboardData.hasAppointments ? (
        <section className="appointment-card modern-card" onClick={() => setIsRescheduleOpen(true)}>
          <div className="card-top-row">
            <span className="top-label">🗓️ Upcoming Appointment</span>
            <span className="arrow-icon">›</span>
          </div>
          <div className="card-main-info">
            <h3>{dashboardData.appointment.doctorName}</h3>
            <p className="sub-text">{dashboardData.appointment.department}</p>
            <p className="sub-text">{dashboardData.appointment.hospitalName}</p>
            <p className="date-time">
              <strong>{dashboardData.appointment.date} • {dashboardData.appointment.time}</strong>
            </p>
          </div>
        </section>
      ) : (
        <section className="empty-state-card modern-card">
          <div className="empty-icon">☕</div>
          <h3>No Upcoming Appointments</h3>
          <p>You are all caught up! Enjoy your day.</p>
          <button className="btn-outline-primary">+ Book New Appointment</button>
        </section>
      )}

      {/* 2. Quick Actions */}
      <div className="section-title" style={{ marginTop: '10px' }}>Quick Actions</div>
      <section className="quick-actions-grid">
        <button className="action-card"><span className="action-icon">📅</span><span>Book Appt.</span></button>
        <button className="action-card highlight" onClick={() => setIsVitalsOpen(true)}>
          <span className="action-icon">🩺</span><span>Health Tracker</span>
        </button>
        <button className="action-card"><span className="action-icon">📁</span><span>Health History</span></button>
        <button className="action-card"><span className="action-icon">💊</span><span>Med Reminders</span></button>
        <button className="action-card"><span className="action-icon">🏥</span><span>Hospitals</span></button>
        <button className="action-card"><span className="action-icon">📊</span><span>Reports</span></button>
      </section>

      {/* 3. Conditional Recent Health Logs using FAKE DATA */}
      <div className="section-title" style={{ marginTop: '24px', marginBottom: '10px' }}>Recent Logs</div>
      
      {dashboardData.hasLogs ? (
        <section className="modern-card" style={{ padding: 0, overflow: 'hidden' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {dashboardData.recentLogs.map((log) => (
              <li key={log.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', borderBottom: '1px solid #F1F5F9' }}>
                <span style={{ fontSize: '20px' }}>✅</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '14px', color: 'var(--text-dark)' }}>{log.title}</strong>
                  <span style={{ fontSize: '12px', color: '#64748B' }}>{log.time}</span>
                </div>
              </li>
            ))}
          </ul>
          <button style={{ width: '100%', padding: '14px', background: '#F8FAFC', border: 'none', color: 'var(--primary-blue)', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
            View Full History ➡️
          </button>
        </section>
      ) : (
        <section className="empty-state-card modern-card" style={{ padding: '24px 16px' }}>
          <div className="empty-icon small-icon">📝</div>
          <h4>No logs yet today</h4>
          <button className="btn-primary" style={{ padding: '10px', fontSize: '13px', marginTop: '10px' }} onClick={() => setIsVitalsOpen(true)}>
            Log Vitals Now
          </button>
        </section>
      )}

      {/* Modals */}
      <VitalsModal isOpen={isVitalsOpen} onClose={() => setIsVitalsOpen(false)} />
      <RescheduleModal isOpen={isRescheduleOpen} onClose={() => setIsRescheduleOpen(false)} />
    </div>
  );
}