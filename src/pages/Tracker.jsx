import { useState } from 'react';
import VitalsModal from '../components/VitalsModal'; // <-- Import your existing modal

export default function Tracker({ setActiveTab }) {
  // State to control the Vitals logging modal
  const [isVitalsOpen, setIsVitalsOpen] = useState(false);

  return (
    <div className="page-layout">
      <div className="page-header" style={{ marginBottom: '20px' }}>
        <button 
          className="back-btn" 
          onClick={() => setActiveTab('Home')} 
          style={{ fontSize: '20px', padding: 0 }}
        >
          ←
        </button>
        <h2 style={{ fontSize: '20px', margin: 0, flex: 1, textAlign: 'center', paddingRight: '20px' }}>
          Health Tracker
        </h2>
      </div>

      <div className="tracker-list">
        <button className="tracker-card" onClick={() => alert('Opening Symptom Logger...')}>
          <div className="tracker-icon-box">🤒</div>
          <div className="tracker-info">
            <h4>Symptoms</h4>
            <p>Record your symptoms</p>
          </div>
          <span className="arrow">›</span>
        </button>

        {/* --- CONNECTED: Clicking Measurements opens the Vitals Modal --- */}
        <button className="tracker-card" onClick={() => setIsVitalsOpen(true)}>
          <div className="tracker-icon-box">⚖️</div>
          <div className="tracker-info">
            <h4>Measurements</h4>
            <p>BP, Weight, Sugar etc.</p>
          </div>
          <span className="arrow">›</span>
        </button>

        {/* --- CONNECTED: Clicking Vitals also opens the Vitals Modal --- */}
        <button className="tracker-card" onClick={() => setIsVitalsOpen(true)}>
          <div className="tracker-icon-box">🩺</div>
          <div className="tracker-info">
            <h4>Vitals</h4>
            <p>Heart rate, Oxygen, Temp</p>
          </div>
          <span className="arrow">›</span>
        </button>

        <button className="tracker-card" onClick={() => alert('Opening Notes...')}>
          <div className="tracker-icon-box">📝</div>
          <div className="tracker-info">
            <h4>Notes</h4>
            <p>Add health notes</p>
          </div>
          <span className="arrow">›</span>
        </button>
      </div>

      {/* Render the VitalsModal here so it overlays the Tracker page beautifully */}
      <VitalsModal 
        isOpen={isVitalsOpen} 
        onClose={() => setIsVitalsOpen(false)} 
      />
    </div>
  );
}