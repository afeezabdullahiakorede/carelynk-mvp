// // src/services/api.js

// // This function fakes a network request to your backend
// export const fetchDashboardData = () => {
//   return new Promise((resolve) => {
//     // Wait 1.5 seconds to simulate server load time
//     setTimeout(() => {
//       resolve({
//         hasAppointments: true,
//         appointment: {
//           doctorName: "Dr. Adeyemi Lawal",
//           department: "Cardiology",
//           hospitalName: "St. Nicholas Hospital",
//           date: "20 May 2026",
//           time: "10:00 AM"
//         },
//         hasLogs: true,
//         recentLogs: [
//           {
//             id: 1,
//             title: "Blood Pressure: 120/80",
//             time: "Today at 8:00 AM"
//           }
//         ]
//       });
//     }, 1500); 
//   });
// };


const BASE_URL = 'https://carelynk-api.onrender.com/api/v1';

// --- 1. Authenticaton: Log In & Save Token ---
export const loginUser = async (email, password) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || 'Login failed. Check credentials.');
  }

  // Save the secure token to the browser so we stay logged in
  localStorage.setItem('carelynk_token', result.data.accessToken);
  
  return result.data.user;
};

// --- 2. Data Fetching: Authenticated Dashboard ---
export const fetchDashboardData = async () => {
  const token = localStorage.getItem('carelynk_token');

  // If there is no token, don't even try to fetch—just return empty
  if (!token) return { hasAppointments: false, recentLogs: [] };

  try {
    const response = await fetch(`${BASE_URL}/users/dashboard`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) throw new Error('Failed to fetch dashboard');

    const result = await response.json();

    // Map the backend's exact data structure to our React components
    return {
      hasAppointments: result.data.upcoming && result.data.upcoming.length > 0,
      appointment: result.data.upcoming ? result.data.upcoming[0] : null,
      recentLogs: result.data.recentLogs || []
    };
    
  } catch (error) {
    console.error("Dashboard Fetch Error:", error);
    return { hasAppointments: false, recentLogs: [] };
  }
};