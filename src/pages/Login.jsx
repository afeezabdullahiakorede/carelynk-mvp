import { useState } from 'react';

export default function Login({ onLogin, onBack }) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    // Basic validation just for the MVP presentation
    if (!identifier || !password) {
      alert('Please enter your details to continue.');
      return;
    }
    
    // Trigger the unlock function passed from App.jsx
    onLogin();
  };

  return (
    <div className="login-screen">
      <div className="login-header">
        <button className="back-btn" onClick={onBack}>←</button>
      </div>

      <div className="login-content">
        <h1 style={{ margin: '0 0 8px 0', fontSize: '28px', color: 'var(--text-dark)' }}>
          Welcome Back
        </h1>
        <p style={{ margin: '0 0 32px 0', color: '#64748B', fontSize: '15px' }}>
          Sign in to access your health records.
        </p>

        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label>Email or Phone Number</label>
            <input 
              type="text" 
              placeholder="e.g., +234... or name@mail.com" 
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '32px' }}>
            <span style={{ color: 'var(--primary-blue)', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
              Forgot Password?
            </span>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '16px' }}>
            Sign In
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#64748B' }}>
          Don't have an account? <strong style={{ color: 'var(--primary-blue)', cursor: 'pointer' }}>Sign Up</strong>
        </div>
      </div>
    </div>
  );
}