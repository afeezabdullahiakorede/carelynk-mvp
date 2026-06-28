export default function HospitalsDirectory({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="full-screen-modal">
      <div className="modal-header">
        <button className="back-btn" onClick={onClose}>←</button>
        <h2 style={{ fontSize: '18px', margin: 0 }}>Hospitals Directory</h2>
        <div style={{ width: '24px' }}></div>
      </div>

      <div className="modal-body">
        {/* Fake Map View for MVP */}
        <div style={{ 
          height: '180px', backgroundColor: '#F1F5F9', borderRadius: '16px', 
          marginBottom: '20px', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', border: '1px dashed #CBD5E1'
        }}>
          <span style={{ fontSize: '40px' }}>🗺️</span>
          <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#64748B', fontWeight: '600' }}>
            Map View Loading...
          </p>
        </div>

        <div className="search-bar-fake" style={{ marginBottom: '20px' }}>
          <span>🔍</span>
          <input type="text" placeholder="Search hospitals by name or location..." disabled />
        </div>

        <div className="section-title" style={{ marginBottom: '12px' }}>Network Hospitals</div>
        
        <div className="hospital-list">
          {[
            { name: 'St. Nicholas Hospital', location: 'Lagos Island', dist: '1.2 km', rating: '4.8', wait: '15 mins' },
            { name: 'Reddington Hospital', location: 'Victoria Island', dist: '2.8 km', rating: '4.6', wait: '5 mins' },
            { name: 'Lagoon Hospital', location: 'Ikeja, Lagos', dist: '4.1 km', rating: '4.7', wait: '25 mins' }
          ].map((hosp) => (
            <div key={hosp.name} className="hospital-card" onClick={() => alert(`Navigating to ${hosp.name}...`)}>
              <div className="hosp-icon">🏥</div>
              <div className="hosp-details">
                <h4>{hosp.name}</h4>
                <p>{hosp.location} • {hosp.dist}</p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                  <span style={{ fontSize: '11px', backgroundColor: '#FEF3C7', color: '#D97706', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>⭐ {hosp.rating}</span>
                  <span style={{ fontSize: '11px', backgroundColor: '#DBEAFE', color: 'var(--primary-blue)', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>⏱️ Est. Wait: {hosp.wait}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}