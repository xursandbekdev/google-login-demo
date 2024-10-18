// src/firebaseConfig.ts
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const provider = new GoogleAuthProvider();
const auth = getAuth();
export const signInWithGoogle = () => {
  const navigate = useNavigate();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const loginTime = new Date().toLocaleString();

      localStorage.setItem("userEmail", user.email || "No Email");
      localStorage.setItem("loginTime", loginTime);
      navigate("/home");
    })
    .catch((error) => {
      console.error("Error during sign-in: ", error);
    });
};
