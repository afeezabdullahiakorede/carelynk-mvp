import carelynkLogo from '../assets/carelynk-logo.png';
export default function Welcome({ onLogin }) {
  return (
    <div className="welcome-screen">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
        
        <img 
          src={carelynkLogo} 
          alt="Carelynk Logo" 
          style={{ width: '150px', height: 'auto', marginBottom: '-35px', zIndex: 1 }} 
        />
        
        <h1 style={{ color: 'var(--primary-blue)', margin: 0, fontSize: '36px', letterSpacing: '-1px', fontWeight: '800', zIndex: 2 }}>
          Carelynk
        </h1>
        
        <p style={{ margin: '0', fontSize: '15px', color: '#64748B', fontWeight: '500' }}>
          Smart Access to Healthcare
        </p>

        {/* Onboarding Graphic & Copy */}
        <div className="welcome-illustration">
          👩‍⚕️
        </div>
        
        <h2>Better care starts here</h2>
        <p className="sub-description">
          Book appointments, track health, set medicine reminders and more.
        </p>
      </div>

      {/* Actions */}
      <div className="welcome-actions">
        {/* Clicking either button triggers the fake "login" */}
        <button className="btn-primary" onClick={onLogin}>
          Get Started
        </button>
        <button className="btn-secondary" onClick={onLogin}>
          Login / Sign Up
        </button>
      </div>
    </div>
  );
}