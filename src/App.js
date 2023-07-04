import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Authentication from "./components/Authentication";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import Profile from "./pages/Profile";
import SinglePostPage from "./pages/SinglePostPage";
import { AuthContext } from "./contexts/AuthContext";
import { PostsDataContext } from "./contexts/PostsDataContext";
import { UsersDataContext } from "./contexts/UsersDataContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { dispatch: postsDispatch } = useContext(PostsDataContext);
  const {
    state: { usersData },
    dispatch: usersDispatch,
  } = useContext(UsersDataContext);
  const POSTS_API_URL =
    "https://cosmic-connect-api.abhisheky495.repl.co/postsdata";
  const USERS_API_URL =
    "https://cosmic-connect-api.abhisheky495.repl.co/usersdata";

  const getPosts = async () => {
    postsDispatch({ type: "LOADING" });
    try {
      const response = await fetch(POSTS_API_URL);
      const data = await response.json();
      postsDispatch({ type: "GET_POSTS_DATA", payload: data });
      postsDispatch({ type: "FILTER_BY_CREATED_AT" });
    } catch (error) {
      postsDispatch({ type: "GET_POSTS_DATA_ERROR", payload: error });
    }
  };
  const getUsers = async () => {
    usersDispatch({ type: "USERS_DATA_LOADING" });
    try {
      const response = await fetch(USERS_API_URL);
      const data = await response.json();
      usersDispatch({ type: "GET_USERS_DATA", payload: data });
    } catch (error) {
      usersDispatch({ type: "GET_USERS_DATA_ERROR", payload: error });
    }
  };

  const defaultUserData = usersData?.find(
    (user) => user.userName === currentUser?.userName
  );
  defaultUserData !== undefined &&
    localStorage.setItem("currentUser", JSON.stringify(defaultUserData));

  useEffect(() => {
    getPosts();
    getUsers();
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
              <SinglePostPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
