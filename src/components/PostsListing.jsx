import React from "react";
import { Link } from "react-router-dom";

import emptyHeartIcon from "../assets/posts/empty-heart-icon.svg";
import emptyBookmarkIcon from "../assets/posts/empty-bookmark-icon.svg";
import filledHeartIcon from "../assets/posts/filled-heart-icon.svg";
import filledBookmarkIcon from "../assets/posts/filled-bookmark-icon.svg";
import commentIcon from "../assets/posts/comment-icon.svg";
import loadingGif from "../assets/posts/loadingGif.gif";
import NewPost from "./NewPost";
import Filters from "./Filters";

export default function PostsListing({
  postsData,
  postsLoading,
  postsDataError,
}) {
  const formatDate = (userDate) => {
    const date = new Date(userDate);
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    );
    const day = date.getDate();
    return month + " " + day;
  };

  return (
    <div className="flex flex-col border-zinc-300 border-[1px] relative">
      <NewPost />
      <Filters />
      <div className="px-10">
        {postsLoading && (
          <div className="w-[500px] mx-auto pt-10">
            <img
              src={loadingGif}
              className="w-10 m-auto pt-8"
              alt="infinity loader"
            />
          </div>
        )}
        {postsDataError && (
          <p className="w-[500px] mx-auto pt-10">Refresh or Try again later</p>
        )}
        {!postsLoading && postsData.length === 0 && (
          <p className="w-[500px] mx-auto pt-10 text-center">
            You dont follow nobody. <br />
            Go{" "}
            <Link to="/explore" className=" text-blue-700">
              #Explore
            </Link>
          </p>
        )}
        {postsData.map((post) => {
          const {
            id,
            content,
            userName,
            fullName,
            avatar,
            verified,
            media,
            comments,
            createdAt,
            likedBy,
          } = post;
          return (
            <div key={id} className="w-[500px] mx-auto border-b-[1px] py-7">
              <div className="flex items-center gap-1">
                <img
                  src={avatar}
                  alt={fullName}
                  className="w-9 pb-1 mr-[2px]"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <p>{fullName}</p>
                    <div className="flex gap-1 items-center">
                      {verified && (
                        <img
                          src="https://img.icons8.com/?size=24&id=2sZ0sdlG9kWP&format=svg"
                          className="w-4"
                          alt="verified"
                        />
                      )}
                      <span>•</span>
                      <p className="font-light text-sm">
                        {formatDate(createdAt)}
                      </p>
                    </div>
                  </div>
                  <p className="font-light text-sm -mt-1">{userName}</p>
                </div>
              </div>
              <p className="py-1">{content}</p>
              {media.image && (
                <img
                  src={media.image}
                  alt={`post by ${fullName}`}
                  className="object-contain w-full h-96 bg-zinc-950"
                />
              )}
              {media.video && (
                <iframe
                  src={media.video}
                  title={media.content}
                  className="w-full h-96"
                  allowFullScreen
                ></iframe>
              )}
              <div className=" flex mt-1 gap-4">
                <div className="flex items-center gap-1 hover:cursor-pointer">
                  <img src={emptyHeartIcon} alt="empty heart" className="w-5" />
                  <span>{likedBy.length}</span>
                </div>
                <img
                  src={emptyBookmarkIcon}
                  alt="empty bookmark"
                  className="w-5 hover:cursor-pointer"
                />
                <div className="flex items-center gap-1 hover:cursor-pointer">
                  <img src={commentIcon} alt="comment" className="w-5" />
                  <span>{comments.length}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
