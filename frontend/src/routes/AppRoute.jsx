
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/DashboardPage";
import Patients from "../pages/PatientsPage";
import Doctors from "../pages/DoctorsPage";

const AppRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Root redirect to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
         
        {/* Parent Route for Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Child routes (No leading slash '/' so they are relative to /dashboard) */}
          <Route path="patients" element={<Patients />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="appointments" element={<div className="p-6">Appointments</div>} />
          <Route path="reports" element={<div className="p-6">Reports</div>} />
          <Route path="settings" element={<div className="p-6">Settings</div>} />
          <Route path="profile" element={<div className="p-6">My Profile</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoute;


// import React from 'react'
// import {Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Dashboard from "../pages/DashboardPage";
// import Patients from "../pages/PatientsPage";
// import Doctors from "../pages/DoctorsPage";

// const AppRoute = () => {
//   return (
//     <div>
//       {/* <Dashboard /> */}
//       <Routes>
//         <Route path="/" element={<Navigate to="/dashboard" replace />} />
         
//          <Route path="/dashboard" element={<Dashboard/>}>
//          <Route path="/patients" element={<Patients />} />
//          <Route path="/doctors" element={<Doctors />} />
//          <Route path="/appointments" element={<div className="p-6">Appointments</div>} />
//          <Route path="/reports" element={<div className="p-6">Reports</div>} />
//         <Route path="/settings" element={<div className="p-6">Settings</div>} />
//          <Route path="/profile" element={<div className="p-6">My Profile</div>} />
//          <Route/>
       
//        </Routes>
//     </div>
//   )
// }

// export default AppRoute
