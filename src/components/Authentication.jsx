import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { AuthContext } from "../contexts/AuthContext";

export default function Authentication({ signup, login }) {
  const { signUpUser, loginUser, guestLogin } = useContext(AuthContext);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const guestCredentials = {
    email: "abhishek@testing.com",
    password: "abhishekY495",
  };

  const redirectTo = () => {
    if (location.state) {
      return navigate(location?.state?.from?.pathname);
    } else {
      return navigate("/homepage");
    }
  };

  const signUpBtnHandler = (e) => {
    if (fullName.length === 0) {
      toast.error("Full Name cannot be empty");
    } else if (userName.length === 0) {
      toast.error("Username cannot be empty");
    } else if (email.length === 0) {
      toast.error("Email cannot be empty");
    } else if (password.length <= 6) {
      toast.error("Password should be greater than 6 characters");
    } else {
      signUpUser(fullName, userName, email, password);
      redirectTo();
    }
  };

  const loginBtnHandler = () => {
    if (email.length === 0) {
      toast.error("Email cannot be empty");
    } else if (password.length === 0) {
      toast.error("Password cannot be empty");
    } else {
      loginUser(email, password);
      redirectTo();
    }
  };

  const guestLoginBtnHandler = () => {
    setEmail(guestCredentials.email);
    setPassword(guestCredentials.password);
    setTimeout(() => {
      guestLogin(guestCredentials.email, guestCredentials.password);
      toast.success("Logged In");
      redirectTo();
    }, 1500);
  };

  return (
    <>
      <div className="flex flex-col w-[320px] bg-slate-200 m-auto p-5 py-10 gap-2 rounded">
        {signup && (
          <>
            <label>
              <p>Full Name</p>
              <input
                className="border-zinc-300 w-full rounded-md border-2"
                value={fullName}
                type="text"
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
            <label>
              <p>Username</p>
              <input
                className="border-zinc-300 w-full rounded-md border-2"
                value={userName}
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
          </>
        )}
        <label>
          <p>Email</p>
          <input
            className="border-zinc-300 w-full rounded-md border-2"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            className="border-zinc-300 w-full rounded-md border-2"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {signup && (
          <button
            className="bg-slate-400 p-1 w-full rounded"
            onClick={signUpBtnHandler}
          >
            Sign Up
          </button>
        )}
        {login && (
          <div className="flex justify-center gap-1">
            <button
              className="bg-slate-400 p-1 w-full rounded"
              onClick={loginBtnHandler}
            >
              Login
            </button>
            <button
              className="bg-orange-400 p-1 w-full rounded"
              onClick={guestLoginBtnHandler}
            >
              Guest Login
            </button>
          </div>
        )}
        {signup && (
          <p className="mt-3">
            Have an Account?{" "}
            <Link className="underline" to="/login">
              Login
            </Link>
          </p>
        )}
        {login && (
          <p className="mt-3">
            Dont have an Account?{" "}
            <Link className="underline" to="/signup">
              Sign Up
            </Link>
          </p>
        )}
      </div>
    </>
  );
}
