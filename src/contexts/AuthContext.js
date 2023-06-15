import { createContext, useContext } from "react";
import { UsersDataContext } from "./UsersDataContext";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const { usersData } = useContext(UsersDataContext);

  const signUpUser = (fullName, userName, email, password) => {
    let isUserPresent = false;
    usersData.map((user) => {
      if (user.userName.toLowerCase() === userName.toLowerCase()) {
        toast.error("Username already exists.");
        isUserPresent = true;
      } else if (user.email.toLowerCase() === email.toLowerCase()) {
        toast.error("Email already exists.");
        isUserPresent = true;
      }
    });
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
      toast.success("Signed Up");
      localStorage.setItem("currentUser", JSON.stringify(newUser));
    }
  };

  const loginUser = (email, password) => {
    let emailError = true;
    let passwordError = false;
    usersData.map((user) => {
      if (user.email === email) {
        emailError = false;
        if (user.password === password) {
          toast.success("Logged In");
          localStorage.setItem("currentUser", JSON.stringify(user));
          return;
        } else {
          passwordError = true;
        }
      }
    });
    //
    if (emailError) {
      toast.error("Email does not exist");
    }
    if (passwordError) {
      toast.error("Wrong password");
    }
  };

  const guestLogin = (email, password) => {
    usersData.map((user) => {
      if (
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
      ) {
        localStorage.setItem("currentUser", JSON.stringify(user));
      }
    });
  };

  const logoutUser = () => {
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{ signUpUser, loginUser, guestLogin, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
