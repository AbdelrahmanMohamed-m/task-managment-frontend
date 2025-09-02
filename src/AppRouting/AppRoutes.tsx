import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Register from "../components/auth/register";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import { Layout } from "lucide-react";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/auth/login";

const AppRoutes = () => (
  <Routes>
    {/* Public routes */}
    <Route path="/LandingPage" element={<LandingPage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Protected routes with layout */}
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Layout>
            <Dashboard />
          </Layout>
        </ProtectedRoute>
      }
    />

    {/* Default redirect */}
    <Route path="/" element={<Navigate to="/LandingPage" replace />} />
  </Routes>
);

export default AppRoutes;