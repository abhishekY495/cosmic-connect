import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useContext(AuthContext);
  return currentUser ? children : <Navigate to="/login" />;
}
