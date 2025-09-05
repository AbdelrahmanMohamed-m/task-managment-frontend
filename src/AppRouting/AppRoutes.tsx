import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Login from "../Pages/login";
import SignUp from "../Pages/signup";
import Dashboard from "../Pages/Dashboard";

const AppRoutes = () => (
  <Routes>
    {/* Public routes */}
    <Route path="/LandingPage" element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />

    {/* Protected routes with layout */}
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />

    {/* Default redirect */}
    <Route path="/" element={<Navigate to="/LandingPage" replace />} />
  </Routes>
);

export default AppRoutes;
