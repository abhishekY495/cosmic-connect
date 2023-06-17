import React, { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { UsersDataContext } from "../../contexts/UsersDataContext";

export default function SecondarySidebar() {
  const { currentUser } = useContext(AuthContext);
  const { usersData } = useContext(UsersDataContext);

  const followingUsers = currentUser.following;

  const suggestedUsers = usersData.filter((user) => {
    return (
      !followingUsers.includes(user.userName) &&
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
          return <li key={user.userName}>{user.userName}</li>;
        })}
      </ul>
    </div>
  );
}
