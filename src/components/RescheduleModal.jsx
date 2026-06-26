export default function RescheduleModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Reschedule Appointment</h3>
        <p className="modal-subtitle">Current: Dr. Smith (Tomorrow, 10:00 AM)</p>
        
        <div className="form-group">
          <label>Select New Date</label>
          <input type="date" />
        </div>
        
        <div className="form-group">
          <label>Select Time</label>
          <select>
            <option value="">Choose a time...</option>
            <option value="09:00">09:00 AM</option>
            <option value="11:30">11:30 AM</option>
            <option value="14:00">02:00 PM</option>
            <option value="16:00">04:00 PM</option>
          </select>
        </div>
        
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button 
            className="btn-primary" 
            onClick={() => { alert('Appointment Rescheduled! 📅'); onClose(); }}
          >
            Confirm New Time
          </button>
        </div>
      </div>
    </div>
  );
}