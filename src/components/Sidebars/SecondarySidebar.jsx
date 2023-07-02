import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { UsersDataContext } from "../../contexts/UsersDataContext";
import followIcon from "../../assets/profile/followIcon.svg";
import verifiedIcon from "../../assets/profile/verified.svg";

export default function SecondarySidebar() {
  const { currentUser } = useContext(AuthContext);
  const {
    state: { usersData },
    dispatch,
  } = useContext(UsersDataContext);
  const [searchTerm, setSearchTerm] = useState("");

  const currentUserProfile = usersData?.find(
    (user) => user.userName === currentUser.userName
  );
  const currentUsersFollowing = currentUserProfile?.following;

  const suggestedUsers = usersData?.filter((user) => {
    return (
      !currentUsersFollowing
        .map((followingUser) => followingUser.userName)
        .includes(user.userName) &&
      !user.userName.includes(currentUser.userName)
    );
  });

  const searchedUsers = usersData.filter((user) => {
    return (
      user.userName.toLowerCase().includes(searchTerm) ||
      user.fullName.toLowerCase().includes(searchTerm)
    );
  });

  const usersList = searchTerm.length === 0 ? suggestedUsers : searchedUsers;

  if (searchTerm.length === 0) {
    usersList.sort((a, b) => b.followers.length - a.followers.length);
  }

  const followUser = (username) => {
    dispatch({ type: "FOLLOW", payload: { username, currentUser } });
  };

  return (
    <div className="w-[300px] border-l-[1px] sticky top-0 h-screen pl-3">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-[1px] w-full rounded-md pl-1"
        placeholder="Search Users..."
      />
      <div>
        {usersList.map((user, index) => {
          if (index < 5) {
            return (
              <div
                key={user.userName}
                className="flex justify-between items-center"
              >
                <Link
                  to={`/${user.userName}`}
                  className="flex items-center gap-2"
                >
                  <img src={user.avatar} className="w-9" alt="" />
                  <div>
                    <div className="flex gap-1">
                      <p className="w-max font-medium">{user.fullName}</p>
                      {user.verified && (
                        <img src={verifiedIcon} className="w-4" alt="" />
                      )}
                    </div>
                    <p className="font-light text-sm text-gray-500">
                      @{user.userName}
                    </p>
                  </div>
                </Link>
                <img
                  src={followIcon}
                  onClick={() => followUser(user.userName)}
                  className="w-7 p-1 bg-zinc-600 rounded-full hover:cursor-pointer"
                  alt=""
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
