import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { AuthContext } from "./contexts/AuthContext";
import Authentication from "./components/Authentication";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import Profile from "./pages/Profile";

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <Toaster position="top-center" />
      <Routes>
        <Route
          path="/signup"
          element={
            currentUser ? <Navigate to="/home" /> : <Authentication signup />
          }
        />
        <Route
          path="/login"
          element={
            currentUser ? <Navigate to="/home" /> : <Authentication login />
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <ProtectedRoute>
              <ExplorePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
