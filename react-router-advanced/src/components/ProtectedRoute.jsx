import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// Simulated authentication function
// In a real application, this would likely be replaced with a more robust auth system
const isAuthenticated = () => {
  // For demonstration purposes, we'll use localStorage
  // In a real app, you'd use a more secure method like JWT tokens
  return localStorage.getItem("isLoggedIn") === "true";
};

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Redirect to the login page if not authenticated
    // We pass the current location in state so we can redirect back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the child components
  return children;
};

export default ProtectedRoute;
