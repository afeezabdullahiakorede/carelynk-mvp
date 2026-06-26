// src/services/api.js

// This function fakes a network request to your backend
export const fetchDashboardData = () => {
  return new Promise((resolve) => {
    // Wait 1.5 seconds to simulate server load time
    setTimeout(() => {
      resolve({
        hasAppointments: true,
        appointment: {
          doctorName: "Dr. Adeyemi Lawal",
          department: "Cardiology",
          hospitalName: "St. Nicholas Hospital",
          date: "20 May 2026",
          time: "10:00 AM"
        },
        hasLogs: true,
        recentLogs: [
          {
            id: 1,
            title: "Blood Pressure: 120/80",
            time: "Today at 8:00 AM"
          }
        ]
      });
    }, 1500); 
  });
};