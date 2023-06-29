import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UsersDataContext } from "./UsersDataContext";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const {
    state: { usersData },
  } = useContext(UsersDataContext);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const signUpUser = (fullName, userName, email, password) => {
    return new Promise((resolve, reject) => {
      let isUserPresent = false;
      usersData.forEach((user) => {
        if (user.userName.toLowerCase() === userName.toLowerCase()) {
          reject("Username already exists.");
          isUserPresent = true;
        } else if (user.email.toLowerCase() === email.toLowerCase()) {
          reject("Email already exists.");
          isUserPresent = true;
        }
      });
      //
      if (!isUserPresent) {
        const newUser = {
          userName,
          fullName,
          email,
          password,
          verified: false,
          bio: "",
          avatar: "",
          website: "",
          followers: [],
          following: [],
        };
        //
        setTimeout(() => {
          resolve(newUser);
          localStorage.setItem("currentUser", JSON.stringify(newUser));
          navigate("/home");
        }, 1500);
      }
    });
  };

  const loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
      let emailError = true;
      let passwordError = false;
      usersData.forEach((user) => {
        if (user.email === email) {
          emailError = false;
          if (user.password === password) {
            setTimeout(() => {
              resolve(
                localStorage.setItem("currentUser", JSON.stringify(user))
              );
              navigate("/home");
            }, 1500);
          } else {
            passwordError = true;
          }
        }
      });
      //
      if (emailError) {
        reject("Email does not exist");
      }
      if (passwordError) {
        reject("Wrong password");
      }
    });
  };

  const guestLogin = (email, password) => {
    return new Promise((resolve, reject) => {
      usersData.forEach((user) => {
        if (user.email === email && user.password === password) {
          setTimeout(() => {
            resolve(localStorage.setItem("currentUser", JSON.stringify(user)));
            navigate("/home");
          }, 1500);
        } else {
          setTimeout(() => {
            reject("Something went wrong. Try again later");
          }, 1500);
        }
      });
    });
  };

  const logoutUser = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, signUpUser, loginUser, guestLogin, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
