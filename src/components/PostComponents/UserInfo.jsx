import React, { useContext } from "react";
import { Link } from "react-router-dom";

import verifiedIcon from "../../assets/profile/verified.svg";
import editIcon from "../../assets/posts/edit-icon.svg";
import darkEditIcon from "../../assets/posts/dark-edit-icon.svg";
import PostSettings from "./PostSettings";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function UserInfo({ post, showComments }) {
  const {
    theme: { darkMode },
  } = useContext(ThemeContext);
  
  const formatDate = (userDate) => {
    const date = new Date(userDate);
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    );
    const day = date.getDate();
    return month + " " + day;
  };

  const postCreatedDate =
    post?.createdAt !== undefined ? formatDate(post?.createdAt) : "";

  return (
    <div className="flex justify-between items-start">
      <Link to={`/${post?.userName}`}>
        <div className="flex items-center gap-1">
          <img
            src={post?.avatar}
            alt={post?.fullName}
            className="w-9 h-9 object-cover mr-[2px] rounded-full"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <p className="font-semibold">{post?.fullName}</p>
              <div className="flex gap-1 items-center">
                {post?.verified && (
                  <img src={verifiedIcon} className="w-4" alt="verified" />
                )}
                <span>•</span>
                <p className="font-light text-sm">{postCreatedDate}</p>
                {post?.edited && (
                  <div className="flex gap-1">
                    <span>•</span>
                    <img
                      src={darkMode ? darkEditIcon : editIcon}
                      className="w-4 opacity-60"
                      alt="edit"
                    />
                  </div>
                )}
              </div>
            </div>
            <p className="font-light text-sm -mt-1">@{post?.userName}</p>
          </div>
        </div>
      </Link>
      {/*  */}
      <PostSettings post={post} showComments={showComments} />
    </div>
  );
}
