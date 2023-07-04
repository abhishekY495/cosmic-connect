import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import verifiedIcon from "../assets/profile/verified.svg";
import logoutIcon from "../assets/profile/logoutIcon.svg";
import { AuthContext } from "../contexts/AuthContext";
import { UsersDataContext } from "../contexts/UsersDataContext";
import EditProfileModal from "./EditProfileModal";

export default function UserProfile({ userProfile, username }) {
  const navigate = useNavigate();
  const { currentUser, logoutUser } = useContext(AuthContext);
  const {
    state: { usersData },
    dispatch,
  } = useContext(UsersDataContext);
  const [openModal, setOpenModal] = useState(false);

  const currentUserProfile = usersData?.find(
    (user) => user.userName === currentUser.userName
  );
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
  };
  const unFollowUser = () => {
    dispatch({ type: "UN_FOLLOW", payload: { username, currentUser } });
  };

  return (
    <>
      <EditProfileModal
        userProfile={currentUserProfile}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
      <div className="pb-2 sticky top-0 bg-slate-400/80 backdrop-blur-3xl z-[1]">
        <img
          src={userProfile?.avatar}
          className="w-24 h-[96px] object-cover rounded-full"
          alt="user avatar"
        />
        <div className="flex gap-1">
          <p className="font-bold text-xl">{userProfile?.fullName}</p>
          {userProfile?.verified && (
            <img className="w-5" src={verifiedIcon} alt="verified" />
          )}
        </div>
        <p className="text-sm">@{userProfile?.userName}</p>
        <p className="w-[540px]">{userProfile?.bio}</p>
        <p className="w-[540px]">{userProfile?.website}</p>
        <div className="flex gap-4">
          <p>
            <b>{userProfile?.followers.length}</b>Followers
          </p>
          <p>
            <b>{userProfile?.following.length}</b>Following
          </p>
        </div>
        {currentUser.userName === userProfile?.userName ? (
          <>
            <button onClick={() => setOpenModal(true)}>Edit</button>
            <img
              className="w-[22px] bg-red-400 p-[2px] rounded-full hover:cursor-pointer"
              onClick={logoutBtnHandler}
              src={logoutIcon}
              alt=""
            />
          </>
        ) : hasFollowed ? (
          <button
            onClick={unFollowUser}
            className="bg-zinc-500 text-white p-1 px-5 rounded-full m-2"
          >
            UnFollow
          </button>
        ) : (
          <button
            onClick={followUser}
            className="bg-zinc-600 text-white p-1 px-5 rounded-full m-2"
          >
            Follow
          </button>
        )}
      </div>
    </>
  );
}
