import React, { useContext } from "react";

import verifiedIcon from "../assets/profile/verified.svg";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link, useParams } from "react-router-dom";
import { UsersDataContext } from "../contexts/UsersDataContext";

export default function FollowersModal({ open, onClose }) {
  const { username } = useParams();
  const {
    state: { usersData },
  } = useContext(UsersDataContext);
  const {
    theme: { darkMode },
  } = useContext(ThemeContext);

  const closeModal = () => {
    onClose();
  };

  const userProfile = usersData?.find((user) => user?.userName === username);
  const followers = userProfile.followers;

  if (!open) return null;
  return (
    <div
      id="followers-modal-overlay"
      className="fixed top-0 right-0 bg-zinc-500/50 w-screen h-screen z-[20]"
      onClick={closeModal}
    >
      <div
        className={`${
          darkMode && "text-black bg-gray-100"
        } w-[320px] m-auto bg-white p-5 mt-8 rounded-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        {followers.length === 0 ? (
          <div>No followers</div>
        ) : (
          followers.map((user) => {
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
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
