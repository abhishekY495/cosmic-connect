import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { UsersDataContextProvider } from "./contexts/UsersDataContext";
import { PostsDataContextProvider } from "./contexts/PostsDataContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <UsersDataContextProvider>
        <AuthContextProvider>
          <PostsDataContextProvider>
            <App />
          </PostsDataContextProvider>
        </AuthContextProvider>
      </UsersDataContextProvider>
    </Router>
  </React.StrictMode>
);
