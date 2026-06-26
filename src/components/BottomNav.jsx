export default function BottomNav({ activeTab, setActiveTab }) {
  // Our navigation data structure
  const navItems = [
    { id: 'Home', icon: '🏠', label: 'Home' },
    { id: 'Schedule', icon: '🗓️', label: 'Appointments' },
    { id: 'Tracker', icon: '🩺', label: 'Tracker' },
    { id: 'Records', icon: '📈', label: 'Records' },
    { id: 'Profile', icon: '⚙️', label: 'Profile' },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.id}
          // If this button is the active tab, apply the 'active' CSS class
          className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
          onClick={() => setActiveTab(item.id)}
        >
          <span className="icon">{item.icon}</span>
          <span className="label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}