export default function VitalsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="full-screen-modal" style={{ backgroundColor: 'rgba(15, 23, 42, 0.6)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
      
      {/* Bottom Sheet Style Modal */}
      <div className="modern-card" style={{ width: '100%', borderBottomLeftRadius: 0, borderBottomRightRadius: 0, padding: '24px', animation: 'slideUp 0.3s ease-out' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--text-dark)' }}>Log Vitals</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#64748B' }}>✕</button>
        </div>

        <div className="form-group">
          <label>Blood Pressure (mmHg)</label>
          <input type="text" placeholder="e.g., 120/80" />
        </div>

        <div className="form-group">
          <label>Heart Rate (bpm)</label>
          <input type="number" placeholder="e.g., 72" />
        </div>

        <div className="form-group">
          <label>Weight (kg)</label>
          <input type="number" placeholder="e.g., 70" />
        </div>

        <button 
          className="btn-primary" 
          style={{ width: '100%', marginTop: '20px' }} 
          onClick={() => {
            alert('Vitals logged successfully! ✅');
            onClose();
          }}
        >
          Save Vitals
        </button>
      </div>
    </div>
  );
}