import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

import randomIcon from "../assets/randomIcon.svg";
import appIcon from "../assets/cosmic-connect-icon.svg";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Authentication({ signup, login }) {
  const { signUpUser, loginUser } = useContext(AuthContext);
  const {
    theme: { darkMode },
  } = useContext(ThemeContext);
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [avatar, setAvatar] = useState(
    `https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${uuidv4()}`
  );
  const guestCredentials = {
    email: "scottliam61@gmail.com",
    password: "scottliam61",
  };

  const isValidEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  const signUpBtnHandler = () => {
    if (fullName.length === 0) {
      toast.error("Full Name cannot be empty");
    } else if (userName.length === 0) {
      toast.error("Username cannot be empty");
    } else if (email.length === 0) {
      toast.error("Email cannot be empty");
    } else if (!isValidEmail(email)) {
      toast.error("Incorrect email format");
    } else if (password.length <= 6) {
      toast.error("Password should be greater than 6 characters");
    } else {
      try {
        toast.promise(
          signUpUser(avatar, fullName, userName, bio, website, email, password),
          {
            loading: "Signing Up",
            success: "Signed Up",
            error: (err) => `${err}`,
          }
        );
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
  const generateRandomAvatar = () => {
    const url = `https://api.dicebear.com/6.x/bottts-neutral/svg?seed=${uuidv4()}`;
    setAvatar(url);
  };

  return (
    <div className={`${darkMode ? "bg-zinc-900" : "bg-white"} h-screen pt-3`}>
      <header className="flex justify-center items-center gap-2 text-center pb-3 text-3xl font-semibold">
        <img
          src={appIcon}
          className="w-8 animate-spin-slow"
          alt="cosmic connet"
        />
        Cosmic Connect
      </header>
      <div
        className={`${
          darkMode && "text-black"
        } flex flex-col w-[320px] bg-slate-200 m-auto p-5 gap-2 pt-5 rounded`}
      >
        {signup && (
          <>
            <div className="relative">
              <img
                src={avatar}
                className="w-32 h-32 m-auto rounded-full"
                alt="user avatar"
              />
              <img
                src={randomIcon}
                className="w-7 bg-white rounded-full p-1 absolute bottom-0 right-20 hover:cursor-pointer"
                onClick={generateRandomAvatar}
                alt="random"
              />
            </div>
            <label>
              <p>
                Full Name <sup className="text-red-500">*</sup>
              </p>
              <input
                className="border-zinc-300 pl-1 w-full rounded-md border-2"
                value={fullName}
                type="text"
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
            <label>
              <p>
                Username <sup className="text-red-500">*</sup>
              </p>
              <input
                className="border-zinc-300 pl-1 w-full rounded-md border-2"
                value={userName}
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
            <label>
              <p>Bio</p>
              <textarea
                className="border-zinc-300 pl-1 w-full rounded-md border-2"
                value={bio}
                type="text"
                maxLength={35}
                onChange={(e) => setBio(e.target.value)}
              />
            </label>
            <label>
              <p>Website</p>
              <input
                className="border-zinc-300 pl-1 w-full rounded-md border-2"
                value={website}
                type="text"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </label>
          </>
        )}
        <label>
          <p>
            Email <sup className="text-red-500">*</sup>
          </p>
          <input
            className="border-zinc-300 pl-1 w-full rounded-md border-2"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>
            Password <sup className="text-red-500">*</sup>
          </p>
          <input
            className="border-zinc-300 pl-1 w-full rounded-md border-2"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {signup && (
          <>
            <button
              className="bg-slate-400 p-1 w-full rounded"
              onClick={signUpBtnHandler}
            >
              Sign Up
            </button>
            <p className="mt-3">
              Have an Account?{" "}
              <Link className="underline" to="/login">
                Login
              </Link>
            </p>
          </>
        )}
        {login && (
          <>
            <div className="flex flex-col gap-2">
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
            <p className="mt-3">
              Dont have an Account?{" "}
              <Link className="underline" to="/signup">
                Sign Up
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
