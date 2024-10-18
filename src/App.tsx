import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <Router>
    <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
  <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
</Routes>
    </Router>
  );
}

export default App;
