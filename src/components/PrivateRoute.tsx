import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const userEmail = localStorage.getItem("userEmail");

    return userEmail ? children : <Navigate to="/" />;
};
export default PrivateRoute;
