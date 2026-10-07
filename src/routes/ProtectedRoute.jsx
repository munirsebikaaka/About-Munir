import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuthData";

export const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
