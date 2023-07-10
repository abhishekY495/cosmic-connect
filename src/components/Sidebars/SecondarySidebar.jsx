import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import followIcon from "../../assets/profile/followIcon.svg";
import verifiedIcon from "../../assets/profile/verified.svg";
import loadingGif from "../../assets/loadingGif.gif";
import { AuthContext } from "../../contexts/AuthContext";
import { UsersDataContext } from "../../contexts/UsersDataContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function SecondarySidebar() {
  const { currentUser } = useContext(AuthContext);
  const {
    state: { usersData, usersDataLoading },
    dispatch,
  } = useContext(UsersDataContext);
  const {
    theme: { darkMode },
  } = useContext(ThemeContext);

  const currentUserProfile = usersData?.find(
    (user) => user.userName === currentUser.userName
  );
  const currentUsersFollowing = currentUserProfile?.following;

  const suggestedUsers = usersData
    ?.filter((user) => {
      return (
        !currentUsersFollowing
          ?.map((followingUser) => followingUser.userName)
          ?.includes(user.userName) &&
        !user.userName.includes(currentUser.userName)
      );
    })
    .sort((a, b) => b.followers.length - a.followers.length);

  const followUser = (username) => {
    dispatch({ type: "FOLLOW", payload: { username, currentUser } });
    toast.success(`Followed @${username}`);
  };

  return (
    <div className="w-[300px] border-l-[1px] border-zinc-300 sticky top-0 h-screen pl-3 max-[1180px]:hidden">
      <p className="my-2 text-lg border-b pb-1">Suggested users</p>
      <div className="flex flex-col gap-2">
        {usersDataLoading && (
          <div>
            <img
              src={loadingGif}
              className="w-10 m-auto pt-8"
              alt="infinity loader"
            />
          </div>
        )}
        {suggestedUsers?.slice(0, 5)?.map((user) => {
          return (
            <div
              key={user.userName}
              className="flex justify-between items-center border-b-[1px] pb-1"
            >
              <Link
                to={`/${user.userName}`}
                className="flex items-center gap-2"
              >
                <img
                  src={user.avatar}
                  className="w-9 h-9 object-cover rounded-full"
                  alt="user avatar"
                />
                <div>
                  <div className="flex gap-1">
                    <p className="w-max font-medium">{user.fullName}</p>
                    {user.verified && (
                      <img src={verifiedIcon} className="w-4" alt="" />
                    )}
                  </div>
                  <p
                    className={`${
                      darkMode && "text-gray-400"
                    } font-light text-sm text-gray-500 -mt-1`}
                  >
                    @{user.userName}
                  </p>
                </div>
              </Link>
              <img
                src={followIcon}
                onClick={() => followUser(user.userName)}
                className="w-7 bg-zinc-300 rounded-full hover:cursor-pointer"
                alt=""
              />
            </div>
          );
        })}
        {!usersDataLoading && suggestedUsers?.length === 0 && (
          <div className="flex justify-between items-center">
            No suggested Users found
          </div>
        )}
      </div>
    </div>
  );
}
