import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import PostFormModal from "../PostFormModal";

export default function PrimarySidebar() {
  const { currentUser } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const navLinkStyle = ({ isActive }) =>
    !isActive
      ? "px-5 w-[115px] text-end py-1 rounded-lg hover:cursor-pointer"
      : "px-5 w-[115px] text-end py-1 rounded-lg hover:cursor-pointer bg-zinc-300 font-medium";

  return (
    <>
      <PostFormModal open={openModal} onClose={() => setOpenModal(false)} />
      <aside className="w-[220px] border-r-[1px] border-zinc-300 pr-3 pt-2 sticky top-0 h-screen flex flex-col gap-4 items-end">
        <NavLink className={navLinkStyle} to="/home">
          Home
        </NavLink>
        <NavLink className={navLinkStyle} to="/explore">
          Explore
        </NavLink>
        <div
          className="hover:cursor-pointer bg-blue-200 hover:bg-blue-300 w-[115px] px-5 py-1 font-medium rounded-lg"
          onClick={() => setOpenModal(true)}
        >
          <p>New Post</p>
        </div>
        <NavLink
          className="flex gap-2 bg-slate-300 hover:bg-slate-200 px-5 py-2 rounded-lg"
          to={`/${currentUser?.userName}`}
        >
          <img
            src={currentUser?.avatar}
            className="w-10 rounded-full"
            alt="user avatar"
          />
          <div>
            <p>{currentUser?.fullName}</p>
            <p className="font-extralight -mt-1 text-sm">
              @{currentUser?.userName}
            </p>
          </div>
        </NavLink>
      </aside>
    </>
  );
}
