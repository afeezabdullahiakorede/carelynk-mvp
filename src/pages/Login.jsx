import { useState } from 'react';
import { loginUser } from '../services/api'; // <-- 1. Import your new API function

export default function Login({ onLogin, onBack }) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add a loading state
  const [errorMsg, setErrorMsg] = useState('');      // Add an error state

  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (!identifier || !password) {
      setErrorMsg('Please enter your details to continue.');
      return;
    }

    setIsLoading(true);

    try {
      // 2. Call the real backend!
      await loginUser(identifier, password);
      
      // 3. If it succeeds without throwing an error, unlock the app!
      onLogin();
    } catch (err) {
      // 4. If the backend rejects the password, show the error
      setErrorMsg(err.message);
    } finally {
      setIsLoading(false);
    }
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
          Log in to continue your health journey
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

          {/* Show red error box if login fails */}
        {errorMsg && (
          <div style={{ backgroundColor: '#FEE2E2', color: '#DC2626', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px' }}>
            {errorMsg}
          </div>
          )}

          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '16px' }} disabled={isLoading}>
            {isLoading ? 'Authenticating...' : 'Log In'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#64748B' }}>
          Don't have an account? <strong style={{ color: 'var(--primary-blue)', cursor: 'pointer' }}>Sign Up</strong>
        </div>
      </div>
    </div>
  );
}