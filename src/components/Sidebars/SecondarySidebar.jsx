import React, { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { UsersDataContext } from "../../contexts/UsersDataContext";
import { Link } from "react-router-dom";

export default function SecondarySidebar() {
  const { currentUser } = useContext(AuthContext);
  const {
    state: { usersData },
  } = useContext(UsersDataContext);

  const userProfile = usersData?.find(
    (user) => user.userName === currentUser.userName
  );

  const followingUsers = userProfile?.following;

  const suggestedUsers = usersData?.filter((user) => {
    return (
      !followingUsers
        .map((followingUser) => followingUser.userName)
        .includes(user.userName) &&
      !user.userName.includes(currentUser.userName)
    );
  });

  return (
    <div className="w-[220px] border-[1px] border-zinc-300 sticky top-0 h-screen">
      <input
        type="text"
        placeholder="Search Users..."
        className="border-[1px]"
      />
      <ul className="">
        {suggestedUsers.map((user) => {
          return (
            <Link key={user.userName} to={`/${user.userName}`}>
              <li key={user.userName}>{user.userName}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
