import { useState } from 'react';

export default function BookingFlow({ isOpen, onClose }) {
  // Step 1: Hospital, Step 2: Form, Step 3: Success
  const [step, setStep] = useState(1);
  const [selectedHospital, setSelectedHospital] = useState('');

  if (!isOpen) return null;

  // Resets the form and closes the modal
  const handleComplete = () => {
    setStep(1);
    setSelectedHospital('');
    onClose();
  };

  return (
    <div className="full-screen-modal">
      
      {/* Dynamic Header */}
      {step < 3 && (
        <div className="modal-header">
          <button 
            className="back-btn" 
            onClick={() => step === 2 ? setStep(1) : handleComplete()}
          >
            ←
          </button>
          <h2 style={{ fontSize: '18px', margin: 0 }}>
            {step === 1 ? 'Find Hospitals' : 'Book Appointment'}
          </h2>
          <div style={{ width: '24px' }}></div> {/* Spacer for centering */}
        </div>
      )}

      {/* --- STEP 1: SELECT HOSPITAL (Wireframe Screen 5) --- */}
      {step === 1 && (
        <div className="modal-body">
          <div className="search-bar-fake">
            <span>🔍</span>
            <input type="text" placeholder="Search hospital or location..." disabled />
          </div>

          <div className="section-title" style={{ marginTop: '20px', marginBottom: '10px' }}>
            Nearby Hospitals
          </div>

          <div className="hospital-list">
            {[
              { name: 'St. Nicholas Hospital', location: 'Lagos Island', dist: '1.2 km', rating: '4.8' },
              { name: 'Reddington Hospital', location: 'Victoria Island', dist: '2.8 km', rating: '4.6' },
              { name: 'Lagoon Hospital', location: 'Ikeja, Lagos', dist: '4.1 km', rating: '4.7' }
            ].map((hosp) => (
              <div 
                key={hosp.name} 
                className="hospital-card"
                onClick={() => {
                  setSelectedHospital(hosp.name);
                  setStep(2);
                }}
              >
                <div className="hosp-icon">🏥</div>
                <div className="hosp-details">
                  <h4>{hosp.name}</h4>
                  <p>{hosp.location}</p>
                  <span className="rating">⭐ {hosp.rating} <span>({hosp.dist})</span></span>
                </div>
                <div className="arrow">›</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- STEP 2: BOOKING DETAILS (Wireframe Screen 7) --- */}
      {step === 2 && (
        <div className="modal-body">
          <div className="selected-hospital-banner">
            🏥 Booking at <strong>{selectedHospital}</strong>
          </div>

          <div className="form-group" style={{ marginTop: '20px' }}>
            <label>Department</label>
            <select>
              <option>Cardiology</option>
              <option>General Medicine</option>
              <option>Neurology</option>
            </select>
          </div>

          <div className="form-group">
            <label>Doctor</label>
            <select>
              <option>Dr. Adeyemi Lawal</option>
              <option>Dr. Sarah Jenkins</option>
              <option>Any Available Doctor</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Time</label>
            <select>
              <option>10:00 AM</option>
              <option>01:30 PM</option>
              <option>04:00 PM</option>
            </select>
          </div>

          <button 
            className="btn-primary" 
            style={{ marginTop: '40px', width: '100%' }}
            onClick={() => setStep(3)}
          >
            Continue
          </button>
        </div>
      )}

      {/* --- STEP 3: SUCCESS SCREEN (Wireframe Screen 8) --- */}
      {step === 3 && (
        <div className="success-screen">
          <div className="success-icon-large">🎉</div>
          <h2>Appointment Confirmed!</h2>
          <p className="success-subtext">Your appointment is confirmed and added to your schedule.</p>
          
          <div className="receipt-card">
            <div className="receipt-row">
              <span className="icon">👨‍⚕️</span>
              <div>
                <strong>Dr. Adeyemi Lawal</strong>
                <p>Cardiology</p>
              </div>
            </div>
            <div className="receipt-row">
              <span className="icon">🏥</span>
              <div>
                <strong>{selectedHospital}</strong>
                <p>Tomorrow • 10:00 AM</p>
              </div>
            </div>
          </div>

          <div className="success-actions">
            <button className="btn-outline-primary" style={{ width: '100%', marginBottom: '12px' }}>
              📅 Add to Calendar
            </button>
            <button className="btn-primary" style={{ width: '100%' }} onClick={handleComplete}>
              Back to Home
            </button>
          </div>
        </div>
      )}

    </div>
  );
}