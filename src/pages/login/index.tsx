import React from 'react';
import { auth, provider, signInWithPopup } from '../../firebase';
import GoogleImage from "../../../public/googleLogo.png"
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {

    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
    
        const loginTime = new Date().toLocaleString();
        localStorage.setItem("userEmail", user.email || "No Email");
        localStorage.setItem("loginTime", loginTime);
    
        console.log("Google logged in user:", user);
    
        // Navigate to the home page
        navigate("/home");
      } catch (error) {
        console.error("Google login error:", error);
      }
    };
      

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <div className="text-center mt-6">
          <button 
            onClick={handleGoogleLogin}
            className="mt-2 flex justify-center items-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <img src={GoogleImage} alt="Google" className="w-5 h-5 mr-2"/>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
