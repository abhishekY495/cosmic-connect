import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function Profile() {
  const { currentUser, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutBtnHandler = () => {
    logoutUser();
    navigate("/login");
    toast.success("Logged Out");
  };

  const { fullName, userName, email, followers, following } = currentUser;

  return (
    <div className="w-[320px] m-auto bg-slate-200 p-4">
      <p>
        <span className="font-medium">Name:</span>
        {fullName}
      </p>
      <p>
        <span className="font-medium">Username:</span>
        {userName}
      </p>
      <p>
        <span className="font-medium">Email:</span>
        {email}
      </p>
      <div className="flex gap-4">
        <p>
          <b>{followers.length}</b>Followers
        </p>
        <p>
          <b>{following.length}</b>Following
        </p>
      </div>
      <button
        className="bg-red-400 p-1 px-5 rounded my-2"
        onClick={logoutBtnHandler}
      >
        Logout
      </button>
    </div>
  );
}
