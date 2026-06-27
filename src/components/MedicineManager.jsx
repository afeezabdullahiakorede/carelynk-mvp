import { useState } from 'react';

export default function MedicineManager({ isOpen, onClose }) {
  // This state controls which screen we are looking at: 'list' (Screen 9) or 'add' (Screen 10)
  const [currentView, setCurrentView] = useState('list');

  if (!isOpen) return null;

  return (
    <div className="full-screen-modal">
      
      {/* Dynamic Header based on the view */}
      <div className="modal-header">
        <button className="back-btn" onClick={() => currentView === 'add' ? setCurrentView('list') : onClose()}>
          ←
        </button>
        <h2 style={{ fontSize: '18px', margin: 0 }}>
          {currentView === 'list' ? 'Medicine Reminders' : 'Add Medicine'}
        </h2>
        <div style={{ width: '24px' }}>{currentView === 'list' && '🔔'}</div>
      </div>

      {/* --- SCREEN 9: LIST VIEW --- */}
      {currentView === 'list' && (
        <div className="modal-body">
          
          {/* Weekly Calendar Strip */}
          <div className="calendar-strip">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, idx) => (
              <div key={day} className={`calendar-day ${day === 'Wed' ? 'active' : ''}`}>
                <span className="day-name">{day}</span>
                <span className="day-number">{18 + idx}</span>
              </div>
            ))}
          </div>

          {/* Medicine List */}
          <div className="medicine-list">
            <div className="med-card">
              <div className="med-icon bg-blue">💊</div>
              <div className="med-details">
                <h4>Amlodipine 5mg</h4>
                <p>1 tablet • 08:00 AM</p>
              </div>
              <span className="status-pill taken">Taken</span>
            </div>

            <div className="med-card">
              <div className="med-icon bg-blue">💊</div>
              <div className="med-details">
                <h4>Vitamin D3</h4>
                <p>1 tablet • 01:00 PM</p>
              </div>
              <span className="status-pill upcoming">Upcoming</span>
            </div>

            <div className="med-card">
              <div className="med-icon bg-blue">💊</div>
              <div className="med-details">
                <h4>Metformin 500mg</h4>
                <p>1 tablet • 08:00 PM</p>
              </div>
              <span className="status-pill upcoming">Upcoming</span>
            </div>
          </div>

          {/* Add Button */}
          <button 
            className="btn-primary" 
            style={{ marginTop: '24px' }}
            onClick={() => setCurrentView('add')}
          >
            + Add Medicine
          </button>
        </div>
      )}

      {/* --- SCREEN 10: ADD VIEW --- */}
      {currentView === 'add' && (
        <div className="modal-body">
          <div className="form-group">
            <label>Medicine Name</label>
            <input type="text" placeholder="e.g., Paracetamol 500mg" />
          </div>

          <div className="form-group">
            <label>Dosage</label>
            <input type="text" placeholder="1 tablet" />
          </div>

          <div className="form-group">
            <label>Time</label>
            <select>
              <option>08:00 AM</option>
              <option>01:00 PM</option>
              <option>08:00 PM</option>
            </select>
          </div>

          <div className="form-group">
            <label>Frequency</label>
            <select>
              <option>Daily</option>
              <option>Weekly</option>
              <option>As needed</option>
            </select>
          </div>

          <div className="form-group">
            <label>Start Date</label>
            <input type="date" />
          </div>

          <button 
            className="btn-primary" 
            style={{ marginTop: '30px' }}
            onClick={() => {
              alert('Medicine added successfully! ✅');
              setCurrentView('list'); // Send them back to the list
            }}
          >
            Save Reminder
          </button>
        </div>
      )}

    </div>
  );
}