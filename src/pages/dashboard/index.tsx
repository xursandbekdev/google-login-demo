// src/components/Dashboard.tsx
import React from "react";

const Dashboard:React.FC = () => {
  const userEmail = localStorage.getItem("userEmail");
  const loginTime = localStorage.getItem("loginTime");
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {userEmail ? (
        <div className="mt-4">
          <p><strong>User Email:</strong> {userEmail}</p>
          <p><strong>Login Time:</strong> {loginTime}</p>
        </div>
      ) : (
        <p>No user is logged in.</p>
      )}
    </div>
  );
};

export default Dashboard;
