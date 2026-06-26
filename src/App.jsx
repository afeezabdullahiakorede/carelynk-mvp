import { useState } from 'react';
import './App.css';

// Pages
import Welcome from './pages/Welcome'; // <-- 1. Import the new Welcome page
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Tracker from './pages/Tracker';
import Records from './pages/Records';
import Profile from './pages/Profile';

// Components
import Header from './components/Header';
import BottomNav from './components/BottomNav';

function App() {
  // --- NEW: Authentication Gatekeeper ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [activeTab, setActiveTab] = useState('Home');

  const renderPage = () => {
    switch (activeTab) {
      case 'Home': return <Home />;
      case 'Schedule': return <Schedule />;
      case 'Tracker': return <Tracker />;
      case 'Records': return <Records />;
      case 'Profile': return <Profile onLogout={() => setIsAuthenticated(false)} />;      default: return <Home />;
    }
  };

  // --- NEW: If the user is NOT logged in, show ONLY the Welcome screen ---
  if (!isAuthenticated) {
    return (
      <div className="app-container">
        {/* Pass the function to unlock the app when they click "Get Started" */}
        <Welcome onLogin={() => setIsAuthenticated(true)} />
      </div>
    );
  }

  // --- If they ARE logged in, show the normal app ---
  return (
    <div className="app-container">
      <Header />
      
      <main className="content-area" style={{ padding: '20px', paddingBottom: '80px' }}>
        {renderPage()}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;