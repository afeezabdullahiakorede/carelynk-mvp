export default function Schedule() {
  return (
    <div className="page-layout">
      <div className="page-header">
        <h2>My Appointments</h2>
        <button className="btn-primary small-btn">+ Book New</button>
      </div>

      <div className="section-title">Upcoming</div>
      <div className="list-container">
        {/* Next Appointment */}
        <div className="list-card highlight-card">
          <div className="card-date">
            <span className="month">JUN</span>
            <span className="day">25</span>
          </div>
          <div className="card-info">
            <h4>Dr. Smith</h4>
            <p>10:00 AM - Hypertension Checkup</p>
          </div>
          <span className="status-badge upcoming">Tomorrow</span>
        </div>

        {/* Future Appointment */}
        <div className="list-card">
          <div className="card-date">
            <span className="month">JUL</span>
            <span className="day">12</span>
          </div>
          <div className="card-info">
            <h4>Dr. Adams</h4>
            <p>02:30 PM - General Follow-up</p>
          </div>
        </div>
      </div>

      <div className="section-title">Past</div>
      <div className="list-container disabled-list">
        <div className="list-card">
          <div className="card-date">
            <span className="month">MAY</span>
            <span className="day">10</span>
          </div>
          <div className="card-info">
            <h4>Dr. Smith</h4>
            <p>Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
}