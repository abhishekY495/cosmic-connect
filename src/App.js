import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Authentication from "./components/Authentication";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import Profile from "./pages/Profile";
import SinglePost from "./components/SinglePost";
import { AuthContext } from "./contexts/AuthContext";
import { PostsDataContext } from "./contexts/PostsDataContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(PostsDataContext);
  const API_URL = "https://cosmic-connect-api.abhisheky495.repl.co/postsdata";

  const getPosts = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch({ type: "GET_POSTS_DATA", payload: data });
      dispatch({ type: "FILTER_BY_CREATED_AT" });
    } catch (error) {
      dispatch({ type: "GET_POSTS_DATA_ERROR", payload: error });
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

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
          path="/:username"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/:username/post/:postId"
          element={
            <ProtectedRoute>
              <SinglePost />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
