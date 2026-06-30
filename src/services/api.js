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

export const fetchDashboardData = async () => {
  try {
    // 1. The Request: We use 'fetch' to make a GET request to the specific dashboard endpoint
    const response = await fetch(`${BASE_URL}/dashboard`);
    
    // 2. The Check: Ensure the server responded with a success status (like 200 OK)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // 3. The Parse: Convert the server's response into a JavaScript object
    const data = await response.json();

    console.log("🚨 DATA FROM BACKEND:", data);
    
    // 4. The Return: Send the data back to your Home.jsx component
    return data;
    
  } catch (error) {
    // 5. The Fallback: If the server crashes or the internet drops, log the error
    console.error("Error fetching dashboard data:", error);
    
    // Optional: Return a safe fallback object so your app doesn't go to a white screen
    return {
      hasAppointments: false,
      hasLogs: false,
      recentLogs: []
    };
  }
};