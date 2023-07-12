import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import verifiedIcon from "../assets/profile/verified.svg";
import logoutIcon from "../assets/profile/logoutIcon.svg";
import linkIcon from "../assets/profile/linkIcon.svg";
import bioIcon from "../assets/profile/bioIcon.svg";
import moonIcon from "../assets/theme/moonIcon.svg";
import sunIcon from "../assets/theme/sunIcon.svg";
import { AuthContext } from "../contexts/AuthContext";
import { UsersDataContext } from "../contexts/UsersDataContext";
import EditProfileModal from "./EditProfileModal";
import { ThemeContext } from "../contexts/ThemeContext";
import FollowersModal from "./FollowersModal";
import FollowingModal from "./FollowingModal";

export default function UserProfile({ userProfile, username }) {
  const navigate = useNavigate();
  const { currentUser, logoutUser } = useContext(AuthContext);
  const {
    state: { usersData },
    dispatch,
  } = useContext(UsersDataContext);
  const {
    theme: { darkMode },
    toggleTheme,
  } = useContext(ThemeContext);
  const [openModal, setOpenModal] = useState(false);
  const [openFollowersModal, setFollowersModal] = useState(false);
  const [openFollowingModal, setFollowingModal] = useState(false);

  const currentUserProfile = usersData?.find((user) => {
    return user?.userName === currentUser?.userName;
  });

  const currentUsersFollowing = currentUserProfile?.following;
  const hasFollowed = currentUsersFollowing?.some((followingUser) => {
    return followingUser.userName === username;
  });

  const logoutBtnHandler = () => {
    logoutUser();
    navigate("/login");
    toast.success("Logged Out");
  };

  const followUser = () => {
    dispatch({ type: "FOLLOW", payload: { username, currentUser } });
    toast.success(`Followed @${username}`);
  };
  const unFollowUser = () => {
    dispatch({ type: "UN_FOLLOW", payload: { username, currentUser } });
    toast.success(`UnFollowed @${username}`);
  };

  return (
    <>
      <EditProfileModal
        userProfile={currentUserProfile}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
      <FollowersModal
        open={openFollowersModal}
        onClose={() => setFollowersModal(false)}
      />
      <FollowingModal
        open={openFollowingModal}
        onClose={() => setFollowingModal(false)}
      />
      <div
        className={`${
          darkMode && "text-black"
        } p-2 sticky top-0 bg-slate-300/90 backdrop-blur-3xl z-[1]`}
      >
        {/*  */}
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <img
              src={userProfile?.avatar}
              className="w-[120px] h-[120px] object-cover rounded-full"
              alt="user avatar"
            />
            <div className="flex flex-col">
              <div className="flex gap-1">
                <p className="font-bold text-xl">{userProfile?.fullName}</p>
                {userProfile?.verified && (
                  <img className="w-5" src={verifiedIcon} alt="verified" />
                )}
              </div>
              <p className="text-sm -mt-[2px]">@{userProfile?.userName}</p>
              {currentUser?.userName === userProfile?.userName ? (
                <button
                  onClick={() => setOpenModal(true)}
                  className=" w-24 bg-zinc-500 text-white text-sm p-1 px-3 rounded-md my-2"
                >
                  Edit Profile
                </button>
              ) : hasFollowed ? (
                <button
                  onClick={unFollowUser}
                  className="text-sm w-24 bg-zinc-500 text-white p-1 rounded-md my-2"
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={followUser}
                  className="text-sm w-24 bg-zinc-600 text-white p-1 rounded-md my-2"
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          {currentUser?.userName === userProfile?.userName && (
            <div className="flex gap-2">
              <img
                src={darkMode ? sunIcon : moonIcon}
                onClick={toggleTheme}
                className="w-7 hover:cursor-pointer min-[800px]:hidden"
                alt={darkMode ? "sun" : "moon"}
              />
              <img
                className="w-7 h-fit bg-red-400 p-1 rounded-md hover:cursor-pointer"
                onClick={logoutBtnHandler}
                src={logoutIcon}
                alt="logout"
              />
            </div>
          )}
        </div>
        {/*  */}
        {userProfile?.bio && (
          <div className="w-[540px] max-[800px]:w-full flex gap-1 my-[2px]">
            <img src={bioIcon} className="w-[15px]" alt="website" />
            <p>{userProfile?.bio}</p>
          </div>
        )}
        {userProfile?.website && (
          <div className="flex gap-1">
            <img src={linkIcon} className="w-[15px]" alt="website" />
            <a
              href={userProfile?.website}
              className="text-blue-700 text-sm"
              target="_blank"
              rel="noreferrer"
            >
              {userProfile?.website}
            </a>
          </div>
        )}
        {/*  */}
        <div className="flex gap-4">
          <p
            className="hover:cursor-pointer"
            onClick={() => setFollowersModal(true)}
          >
            <b className="mr-[1px]">{userProfile?.followers.length}</b>Followers
          </p>
          <p
            className="hover:cursor-pointer"
            onClick={() => setFollowingModal(true)}
          >
            <b className="mr-[1px]">{userProfile?.following.length}</b>Following
          </p>
        </div>
        {/*  */}
      </div>
    </>
  );
}
