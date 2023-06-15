import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  return !currentUser ? (
    <Navigate to="/login" state={{ from: location }} />
  ) : (
    children
  );
}
