import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import { AuthContext } from "../contexts/AuthContext";

export default function Authentication({ signup, login }) {
  const { signUpUser, loginUser } = useContext(AuthContext);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const guestCredentials = {
    email: "johndoe@gmail.com",
    password: "johndoe77",
  };

  const signUpBtnHandler = () => {
    if (fullName.length === 0) {
      toast.error("Full Name cannot be empty");
    } else if (userName.length === 0) {
      toast.error("Username cannot be empty");
    } else if (email.length === 0) {
      toast.error("Email cannot be empty");
    } else if (password.length <= 6) {
      toast.error("Password should be greater than 6 characters");
    } else {
      try {
        toast.promise(signUpUser(fullName, userName, email, password), {
          loading: "Signing Up",
          success: "Signed Up",
          error: (err) => `${err}`,
        });
      } catch (error) {
        toast.error(error);
      }
    }
  };

  const loginBtnHandler = () => {
    if (email.length === 0) {
      toast.error("Email cannot be empty");
    } else if (password.length === 0) {
      toast.error("Password cannot be empty");
    } else {
      toast.promise(loginUser(email, password), {
        loading: "Logging In",
        success: "Logged In",
        error: (err) => `${err}`,
      });
    }
  };

  const guestLoginBtnHandler = () => {
    setEmail(guestCredentials.email);
    setPassword(guestCredentials.password);
    toast.promise(
      loginUser(guestCredentials.email, guestCredentials.password),
      {
        loading: "Logging In",
        success: "Logged In",
        error: (err) => `${err}`,
      }
    );
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
