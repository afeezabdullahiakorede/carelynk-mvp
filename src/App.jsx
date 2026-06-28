import { useState } from 'react';
import './App.css';

// Pages
import Welcome from './pages/Welcome';
import Login from './pages/Login'; // <-- IMPORT THE NEW LOGIN PAGE
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Tracker from './pages/Tracker';
import Records from './pages/Records';
import Profile from './pages/Profile';

// Components
import Header from './components/Header';
import BottomNav from './components/BottomNav';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // <-- NEW STATE
  
  const [activeTab, setActiveTab] = useState('Home');

  const renderPage = () => {
    switch (activeTab) {
      case 'Home': return <Home setActiveTab={setActiveTab} />;
      case 'Schedule': return <Schedule />;
      case 'Tracker': return <Tracker setActiveTab={setActiveTab} />;
      case 'Records': return <Records setActiveTab={setActiveTab} />;
      case 'Profile': return <Profile onLogout={() => {
        setIsAuthenticated(false);
        setShowLogin(false); // Reset to Welcome screen on logout
      }} />;
      default: return <Home />;
    }
  };

  // --- NEW AUTHENTICATION ROUTING ---
  if (!isAuthenticated) {
    // If they clicked "Login" on the Welcome screen, show the Login Form
    if (showLogin) {
      return (
        <div className="app-container">
          <Login 
            onLogin={() => setIsAuthenticated(true)} 
            onBack={() => setShowLogin(false)} 
          />
        </div>
      );
    }
    
    // Otherwise, show the default Welcome screen
    return (
      <div className="app-container">
        <Welcome onLogin={() => setShowLogin(true)} />
      </div>
    );
  }

  // --- If they ARE logged in, show the normal app ---
  return (
    <div className="app-container">
      <Header setActiveTab={setActiveTab} />
      
      <main className="content-area" style={{ padding: '20px', paddingBottom: '80px' }}>
        {renderPage()}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;