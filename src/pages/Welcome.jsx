export default function Welcome({ onLogin }) {
  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        {/* App Branding */}
        <div className="logo-large">🏥</div>
        <h1>Carelynk</h1>
        <p className="tagline">Your Health, Our Priority</p>

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