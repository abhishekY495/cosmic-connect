import React, { useContext } from "react";

import { PostsDataContext } from "../contexts/PostsDataContext";
import emptyHeartIcon from "../assets/posts/empty-heart-icon.svg";
import emptyBookmarkIcon from "../assets/posts/empty-bookmark-icon.svg";
import filledHeartIcon from "../assets/posts/filled-heart-icon.svg";
import filledBookmarkIcon from "../assets/posts/filled-bookmark-icon.svg";
import commentIcon from "../assets/posts/comment-icon.svg";
import Searchbar from "./Searchbar";
import Filters from "./Filters";

export default function PostsListing() {
  const { postsData, loading, postsDataError } = useContext(PostsDataContext);

  const formatDate = (userDate) => {
    const date = new Date(userDate);
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    );
    const day = date.getDate();
    return month + " " + day;
  };
  return (
    <>
      <div className="flex flex-col gap-2 w-[570px] fixed bg-slate-200/50 backdrop-blur-xl	">
        <Searchbar />
        <Filters />
      </div>
      <div className="flex flex-col border-zinc-300 border-[1px] px-10 pt-16">
        {loading && <p>Getting Posts....</p>}
        {postsDataError && <p>Refresh or Try again later</p>}
        {postsData
          .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
          .map((post) => {
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
                  <img
                    src={emptyHeartIcon}
                    alt="empty heart"
                    className="w-5 hover:cursor-pointer"
                  />
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
    </>
  );
}
