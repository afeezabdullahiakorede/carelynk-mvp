export default function VitalsModal({ isOpen, onClose }) {
  if (!isOpen) return null; // If not open, render nothing

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Log Vitals (Blood Pressure)</h3>
        
        <div className="form-group">
          <label>Systolic (Top number)</label>
          <input type="number" placeholder="e.g., 120" />
        </div>
        
        <div className="form-group">
          <label>Diastolic (Bottom number)</label>
          <input type="number" placeholder="e.g., 80" />
        </div>
        
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>Cancel</button>
          <button 
            className="btn-primary" 
            onClick={() => { alert('Vitals Saved Successfully! ✅'); onClose(); }}
          >
            Save Vitals
          </button>
        </div>
      </div>
    </div>
  );
}