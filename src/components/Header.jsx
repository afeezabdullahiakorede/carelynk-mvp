export default function Header() {
  return (
    <header className="top-header">
      
      {/* Left Side: Brand Identity */}
      <div className="logo-container">
        <h1 className="logo-text">Carelynk</h1>
        <span className="tagline">Smart Access to Care</span>
      </div>

      {/* Right Side: Notifications and Profile */}
      <div className="header-actions">
        <button className="notification-btn" aria-label="Notifications">
          🔔
          {/* The red dot for unread reminders */}
          <span className="notification-dot"></span>
        </button>
        
        <div className="profile-avatar" aria-label="User Profile">
          👤
        </div>
      </div>

    </header>
  );
}

// export default function Header() {
//   return (
//     <header className="top-header" style={{ alignItems: 'flex-start' }}>

//       <div className="logo-container">
//         <h1 className="logo-text">Carelynk</h1>
//         <span className="tagline">Smart Access to Care</span>
//       </div>

//       <div className="header-actions" style={{ flexDirection: 'column', alignItems: 'flex-end' }}>  
//         <div className="greeting-container">
//           <h1 style={{ margin: 0, fontSize: '22px', color: 'var(--text-dark)' }}>Hello, John 👋</h1>
//           <p style={{ margin: 0, fontSize: '13px', color: '#64748B' }}>Hope you're feeling great!</p>
//         </div>
//         </div>

//       {/* Right Side: Notification Bell */}
//       <button className="notification-btn" aria-label="Notifications" style={{ marginTop: '30px' }}>
//         🔔<span className="notification-dot"></span>
//       </button>
//     </header>
//   );
// }