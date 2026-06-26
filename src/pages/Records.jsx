export default function Records() {
  return (
    <div className="page-layout">
      <div className="page-header">
        <h2>Health Records</h2>
        <div className="filter-group">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Vitals</button>
          <button className="filter-btn">Meds</button>
        </div>
      </div>

      <div className="timeline">
        {/* Timeline Item 1 */}
        <div className="timeline-item">
          <div className="timeline-icon bg-blue">🩺</div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h4>Blood Pressure</h4>
              <span className="time-text">Today, 8:00 AM</span>
            </div>
            <p className="metric">120 / 80 mmHg</p>
            <span className="status-text good">Normal Range</span>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div className="timeline-item">
          <div className="timeline-icon bg-green">💊</div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h4>Lisinopril (10mg)</h4>
              <span className="time-text">Yesterday, 9:00 PM</span>
            </div>
            <p className="metric">Taken</p>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div className="timeline-item">
          <div className="timeline-icon bg-blue">🩺</div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h4>Blood Pressure</h4>
              <span className="time-text">Jun 22, 8:15 AM</span>
            </div>
            <p className="metric">135 / 85 mmHg</p>
            <span className="status-text warning">Slightly Elevated</span>
          </div>
        </div>
      </div>
    </div>
  );
}