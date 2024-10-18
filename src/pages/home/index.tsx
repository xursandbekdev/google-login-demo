
import React from "react";

const Home: React.FC = () => {
    const userEmail = localStorage.getItem("userEmail");
    const loginTime = localStorage.getItem("loginTime");

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
            {userEmail && (
                <div className="mt-4">
                    <p><strong>Email:</strong> {userEmail}</p>
                    <p><strong>Logged in at:</strong> {loginTime}</p>
                </div>
            )}
        </div>
    );
};

export default Home;
