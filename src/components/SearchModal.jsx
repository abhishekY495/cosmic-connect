import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

import verifiedIcon from "../assets/profile/verified.svg";
import followIcon from "../assets/profile/followIcon.svg";
import followedIcon from "../assets/profile/followedIcon.svg";
import { UsersDataContext } from "../contexts/UsersDataContext";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function SearchModal({ open, onClose }) {
  const { currentUser } = useContext(AuthContext);
  const {
    state: { usersData },
    dispatch,
  } = useContext(UsersDataContext);
  const {
    theme: { darkMode },
  } = useContext(ThemeContext);
  const [searchTerm, setSearchTerm] = useState();

  const closeModal = () => {
    onClose();
    setSearchTerm();
  };

  const searchedUsers = usersData
    ?.filter((user) => {
      return (
        !user.userName
          .toLowerCase()
          .includes(currentUser.userName.toLowerCase()) &&
        !user.fullName
          .toLowerCase()
          .includes(currentUser.fullName.toLowerCase())
      );
    })
    ?.filter((user) => {
      return (
        user.userName.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        user.fullName.toLowerCase().includes(searchTerm?.toLowerCase())
      );
    });

  const followUser = (username) => {
    dispatch({ type: "FOLLOW", payload: { username, currentUser } });
    toast.success(`Followed ${username}`);
  };
  const unFollowUser = (username) => {
    dispatch({ type: "UN_FOLLOW", payload: { username, currentUser } });
    toast.success(`UnFollowed ${username}`);
  };

  const searchHandler = (e) => {
    if (e.target.value.length === 0) {
      setSearchTerm();
    } else {
      setSearchTerm(e.target.value);
    }
  };

  if (!open) return null;
  return (
    <div
      id="search-modal-overlay"
      className="fixed top-0 right-0 bg-zinc-500/50 backdrop-blur-[1.5px] w-screen h-screen z-[20]"
      onClick={closeModal}
    >
      <div
        className={`${
          darkMode && "text-black bg-gray-100"
        } w-[320px] m-auto bg-white p-5 mt-8 rounded-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          onChange={searchHandler}
          className="border-[1px] w-full rounded-md pl-2 py-1 my-2"
          placeholder="Search Users..."
        />
        <div className="flex flex-col gap-2">
          {searchTerm && searchedUsers?.length === 0 && (
            <div className="text-center">No users found</div>
          )}
          {searchedUsers?.map((user) => {
            const hasFollowed = user.followers.some(
              (followedUser) => followedUser.userName === currentUser.userName
            );
            return (
              <div
                key={user.userName}
                className="flex justify-between items-center border-b-[1px] pb-1"
              >
                <Link
                  to={`/${user.userName}`}
                  className="flex items-center gap-2"
                  onClick={closeModal}
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
                    <p className="font-light text-sm text-gray-500 -mt-1">
                      @{user.userName}
                    </p>
                  </div>
                </Link>
                {hasFollowed ? (
                  <img
                    src={followedIcon}
                    onClick={() => unFollowUser(user.userName)}
                    className="w-7 bg-zinc-300 rounded-full hover:cursor-pointer"
                    alt=""
                  />
                ) : (
                  <img
                    onClick={() => followUser(user.userName)}
                    src={followIcon}
                    className="w-7 bg-zinc-300 rounded-full hover:cursor-pointer"
                    alt=""
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
