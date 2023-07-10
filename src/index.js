import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeContextProvider } from "./contexts/ThemeContext";
import { UsersDataContextProvider } from "./contexts/UsersDataContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { PostsDataContextProvider } from "./contexts/PostsDataContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeContextProvider>
        <UsersDataContextProvider>
          <AuthContextProvider>
            <PostsDataContextProvider>
              <App />
            </PostsDataContextProvider>
          </AuthContextProvider>
        </UsersDataContextProvider>
      </ThemeContextProvider>
    </Router>
  </React.StrictMode>
);
