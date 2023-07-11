import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import homeIcon from "../../assets/navbar/homeIcon.svg";
import exploreIcon from "../../assets/navbar/exploreIcon.svg";
import searchIcon from "../../assets/navbar/searchIcon.svg";
import newPostIcon from "../../assets/navbar/newPostIcon.svg";
import bookmarkIcon from "../../assets/navbar/bookmarkIcon.svg";
import { AuthContext } from "../../contexts/AuthContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import PostFormModal from "../PostFormModal";
import SearchModal from "../SearchModal";

export default function PrimarySidebar() {
  const { currentUser } = useContext(AuthContext);
  const {
    theme: { darkMode },
  } = useContext(ThemeContext);
  const [openModal, setOpenModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-black px-5 text-end py-1 rounded-lg hover:cursor-pointer hover:bg-zinc-400 max-[800px]:px-1 bg-zinc-400 font-medium"
      : "px-5 text-end py-1 rounded-lg hover:cursor-pointer hover:text-black hover:font-medium hover:bg-zinc-400 max-[800px]:px-1";

  const mediaQueries = `
    max-[1180px]:justify-end max-[1180px]:w-fit
    max-[800px]:border-none max-[800px]:flex-row max-[800px]:fixed 
    max-[800px]:bg-slate-300 
    max-[800px]:h-[180px] max-[800px]:top-[94%] 
    max-[800px]:z-10 max-[800px]:items-start max-[800px]:w-[100%]
    max-[800px]:gap-1 max-[800px]:p-2 max-[800px]:pt-[5px] max-[800px]:justify-around max-[800px]:w-[100%]`;

  return (
    <>
      <PostFormModal open={openModal} onClose={() => setOpenModal(false)} />
      <SearchModal open={searchModal} onClose={() => setSearchModal(false)} />
      <aside
        className={`w-[220px] border-r-[1px] border-zinc-300 pr-3 py-3 pb-5 sticky top-0 h-screen flex flex-col gap-4 items-end ${mediaQueries}`}
      >
        <NavLink className={navLinkStyle} to="/home">
          <p className="max-[800px]:hidden">Home</p>
          <img
            className="w-7 hidden max-[800px]:block"
            src={homeIcon}
            alt="home"
          />
        </NavLink>
        <NavLink className={navLinkStyle} to="/explore">
          <p className="max-[800px]:hidden">Explore</p>
          <img
            className="w-7 hidden max-[800px]:block"
            src={exploreIcon}
            alt="explore"
          />
        </NavLink>
        <NavLink className={navLinkStyle} to="/bookmarkedPosts">
          <p className="max-[800px]:hidden">Bookmarked</p>
          <img
            className="w-7 hidden max-[800px]:block"
            src={bookmarkIcon}
            alt="bookmark"
          />
        </NavLink>
        <div
          onClick={() => setSearchModal(true)}
          className={`${
            darkMode && "hover:text-black"
          } px-5 py-1 hover:bg-yellow-200 hover:cursor-pointer hover:font-medium rounded-lg max-[800px]:p-0`}
        >
          <p className="max-[800px]:hidden">Search</p>
          <img
            className="w-7 mt-1 hidden max-[800px]:block"
            src={searchIcon}
            alt="search"
          />
        </div>
        <div
          className={`${
            darkMode && "text-black"
          } hover:cursor-pointer bg-blue-200 hover:bg-blue-300 w-[115px] max-[800px]:w-fit max-[800px]:bg-slate-300 px-5 max-[800px]:p-0 py-1 font-medium rounded-lg`}
          onClick={() => setOpenModal(true)}
        >
          <p className="max-[800px]:hidden">New Post</p>
          <img
            className="w-7 mt-1 hidden max-[800px]:block"
            src={newPostIcon}
            alt="new post"
          />
        </div>
        <NavLink
          className={`${
            darkMode && "text-black"
          } flex items-center gap-2 bg-slate-300 hover:opacity-90 px-5 py-2 rounded-lg max-[800px]:bg-inherit max-[800px]:p-0`}
          to={`/${currentUser?.userName}`}
        >
          <img
            src={currentUser?.avatar}
            className="w-10 h-10 object-cover max-[800px]:mt-1 rounded-full max-[800px]:w-7 max-[800px]:h-7"
            alt="user avatar"
          />
          <div className="max-[800px]:hidden">
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
