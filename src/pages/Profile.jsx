import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import { AuthContext } from "../contexts/AuthContext";
import PrimarySidebar from "../components/Sidebars/PrimarySidebar";
import SecondarySidebar from "../components/Sidebars/SecondarySidebar";
import { UsersDataContext } from "../contexts/UsersDataContext";

export default function Profile() {
  const { logoutUser } = useContext(AuthContext);
  const { usersData } = useContext(UsersDataContext);
  const { username } = useParams();
  const navigate = useNavigate();

  const user = usersData.find((user) => user.userName === username);

  const logoutBtnHandler = () => {
    logoutUser();
    navigate("/login");
    toast.success("Logged Out");
  };

  return (
    <div className="flex justify-center gap-10">
      <PrimarySidebar />
      <div className="w-[500px] bg-slate-200">
        {!user ? (
          <p className="font-medium text-center">Use profile not found.</p>
        ) : (
          <>
            <p>
              <span className="font-medium">Name:</span>
              {user.fullName}
            </p>
            <p>
              <span className="font-medium">Username:</span>
              {user.userName}
            </p>
            <p>
              <span className="font-medium">Email:</span>
              {user.email}
            </p>
            <div className="flex gap-4">
              <p>
                <b>{user.followers.length}</b>Followers
              </p>
              <p>
                <b>{user.following.length}</b>Following
              </p>
            </div>
            <button
              className="bg-red-400 p-1 px-5 rounded my-2"
              onClick={logoutBtnHandler}
            >
              Logout
            </button>
          </>
        )}
      </div>
      <SecondarySidebar />
    </div>
  );
}
