import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

// Protected route component for admin access
const AdminProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  // Check if the user is authenticated and is an admin
  if (!auth.isAdmin) {
    // If not, redirect to login or show unauthorized message
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default AdminProtectedRoute;
