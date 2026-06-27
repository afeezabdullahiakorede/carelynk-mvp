export default function Records({ setActiveTab }) {
  return (
    <div className="page-layout">
      <div className="page-header" style={{ marginBottom: '16px' }}>
        <button className="back-btn" onClick={() => setActiveTab('Home')} style={{ fontSize: '20px', padding: 0 }}>←</button>
        <h2 style={{ fontSize: '20px', margin: 0, flex: 1, textAlign: 'center', paddingRight: '20px' }}>
          Health History
        </h2>
      </div>

      {/* Tabs Menu */}
      <div className="history-tabs">
        <button className="tab active">Overview</button>
        <button className="tab">Vitals</button>
        <button className="tab">Lab Results</button>
      </div>

      {/* Overview Metrics Cards */}
      <div className="metrics-container">
        <div className="metric-card">
          <div className="metric-header">
            <h4>Blood Pressure</h4>
          </div>
          <div className="metric-body">
            <div className="metric-data">
              <span className="value">120/80</span>
              <span className="unit">mmHg</span>
              <span className="status-badge normal">Normal</span>
            </div>
            {/* Fake CSS Chart Representation */}
            <div className="fake-chartline">📈</div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <h4>Weight</h4>
          </div>
          <div className="metric-body">
            <div className="metric-data">
              <span className="value">70</span>
              <span className="unit">kg</span>
              <span className="status-badge normal">Normal</span>
            </div>
            <div className="fake-chartline">📉</div>
          </div>
        </div>
      </div>

      {/* Recent Records List */}
      <div className="section-title" style={{ marginTop: '24px', marginBottom: '12px' }}>
        Recent Records
      </div>
      
      <div className="recent-records-grid">
        <div className="record-mini-card">
          <span className="date">20 May 2026</span>
          <div className="record-val">BP: 120/80 <span>›</span></div>
        </div>
        <div className="record-mini-card">
          <span className="date">18 May 2026</span>
          <div className="record-val">Weight: 70 kg <span>›</span></div>
        </div>
      </div>

      <button className="btn-outline-primary" style={{ width: '100%', marginTop: '20px' }}>
        View All Records
      </button>

    </div>
  );
}