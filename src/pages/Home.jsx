import { useState, useEffect } from 'react';
import RescheduleModal from '../components/RescheduleModal';
import MedicineManager from '../components/MedicineManager';
import BookingFlow from '../components/BookingFlow';
import HospitalsDirectory from '../components/HospitalsDirectory';
import { fetchDashboardData } from '../services/api';

// --- UPDATE: Accept setActiveTab as a prop ---
export default function Home({ setActiveTab }) {
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const [isMedicineOpen, setIsMedicineOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isHospitalsOpen, setIsHospitalsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error("Failed to load data", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Fetching your health data...</p>
      </div>
    );
  }

  return (
    <div className="home-page">
      
      {/* A. Upcoming Appointment Card */}
      {dashboardData?.hasAppointments ? (
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
          <button className="btn-outline-primary" onClick={() => setIsBookingOpen(true)}>
            + Book New Appointment
          </button>
        </section>
      )}

      {/* B. Quick Actions Grid */}
      <div className="section-title" style={{ marginTop: '10px' }}>Quick Actions</div>
      <section className="quick-actions-grid">
        <button className="action-card" onClick={() => setIsBookingOpen(true)}>
          <span className="action-icon">📅</span><span>Book Appt.</span>
        </button>
        
        {/* --- UPDATE: Routes directly to the Tracker view tab --- */}
        <button className="action-card highlight" onClick={() => setActiveTab('Tracker')}>
          <span className="action-icon">🩺</span><span>Health Tracker</span>
        </button>
        
        {/* --- UPDATE: Routes directly to the Records history tab --- */}
        <button className="action-card" onClick={() => setActiveTab('Records')}>
          <span className="action-icon">📁</span><span>Health History</span>
        </button>
        
        <button className="action-card" onClick={() => setIsMedicineOpen(true)}>
          <span className="action-icon">💊</span><span>Med Reminders</span>
        </button>
        
        <button className="action-card" onClick={() => setIsHospitalsOpen(true)}>
          <span className="action-icon">🏥</span><span>Hospitals</span>
        </button>
        
        <button className="action-card" onClick={() => setActiveTab('Records')}>
          <span className="action-icon">📊</span><span>Reports</span>
        </button>
      </section>

      {/* C. Recent Health Logs */}
      <div className="section-title" style={{ marginTop: '24px', marginBottom: '10px' }}>Recent Logs</div>
      
      {dashboardData?.hasLogs ? (
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
          {/* --- UPDATE: Shortcut link to full history view --- */}
          <button 
            onClick={() => setActiveTab('Records')}
            style={{ width: '100%', padding: '14px', background: '#F8FAFC', border: 'none', color: 'var(--primary-blue)', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
          >
            View Full History ➡️
          </button>
        </section>
      ) : (
        <section className="empty-state-card modern-card" style={{ padding: '24px 16px' }}>
          <div className="empty-icon small-icon">📝</div>
          <h4>No logs yet today</h4>
          <button className="btn-primary" style={{ padding: '10px', fontSize: '13px', marginTop: '10px' }} onClick={() => setActiveTab('Tracker')}>
            Log Vitals Now
          </button>
        </section>
      )}

      {/* D. Modals */}
      <RescheduleModal isOpen={isRescheduleOpen} onClose={() => setIsRescheduleOpen(false)} />
      <MedicineManager isOpen={isMedicineOpen} onClose={() => setIsMedicineOpen(false)} />
      <BookingFlow isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <HospitalsDirectory isOpen={isHospitalsOpen} onClose={() => setIsHospitalsOpen(false)} />
    </div>
  );
}