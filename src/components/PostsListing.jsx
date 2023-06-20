import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import emptyHeartIcon from "../assets/posts/empty-heart-icon.svg";
import emptyBookmarkIcon from "../assets/posts/empty-bookmark-icon.svg";
import filledHeartIcon from "../assets/posts/filled-heart-icon.svg";
import filledBookmarkIcon from "../assets/posts/filled-bookmark-icon.svg";
import commentIcon from "../assets/posts/comment-icon.svg";
import loadingGif from "../assets/posts/loadingGif.gif";
import optionsIcon from "../assets/posts/options-icon.svg";
import deleteIcon from "../assets/posts/delete-icon.svg";
import editIcon from "../assets/posts/edit-icon.svg";
import verifiedIcon from "../assets/profile/verified.svg";
import Filters from "./Filters";
import { AuthContext } from "../contexts/AuthContext";
import { PostsDataContext } from "../contexts/PostsDataContext";

export default function PostsListing({
  postsData,
  postsLoading,
  postsDataError,
  usersPost,
  showComments,
}) {
  const { dispatch } = useContext(PostsDataContext);
  const { currentUser } = useContext(AuthContext);
  const [hideOptions, setHideOptions] = useState(true);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const formatDate = (userDate) => {
    const date = new Date(userDate);
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    );
    const day = date.getDate();
    return month + " " + day;
  };

  const likePost = (postId) => {
    dispatch({ type: "LIKE_POST", payload: { postId, currentUser } });
  };
  const unLikePost = (postId) => {
    dispatch({ type: "UN_LIKE_POST", payload: { postId, currentUser } });
  };

  const addToBookmark = (postId) => {
    dispatch({ type: "ADD_TO_BOOKMARK", payload: { postId, currentUser } });
  };
  const removeFromBookmark = (postId) => {
    dispatch({
      type: "REMOVE_FROM_BOOKMARK",
      payload: { postId, currentUser },
    });
  };

  const toggleOptions = (id) => {
    setHideOptions(!hideOptions);
    if (selectedPostId === id) {
      setSelectedPostId(null);
    } else {
      setSelectedPostId(id);
    }
  };

  return (
    <div className="flex flex-col border-zinc-300 border-b-0 border-[1px] relative mb-40">
      {!usersPost && !showComments && <Filters />}
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
          <p className="w-[500px] pt-10 text-center">
            Refresh or Try again later
          </p>
        )}
        {!postsLoading && postsData.length === 0 && (
          <p className="w-[500px] mx-auto pt-10 text-center">
            You dont follow nobody.
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
            bookmarkedBy,
          } = post;
          const hasLiked = likedBy.find((user) => {
            return user.userName === currentUser.userName;
          });
          const hasBookmarked = bookmarkedBy.find((user) => {
            return user.userName === currentUser.userName;
          });

          return (
            <div key={id} className="w-[500px] mx-auto border-b-[1px] py-7">
              <div className="flex justify-between items-start">
                <Link to={`/${userName}`}>
                  <div className="flex items-center gap-1">
                    <img
                      src={avatar}
                      alt={fullName}
                      className="w-9 pb-1 mr-[2px]"
                    />
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <p className="font-semibold">{fullName}</p>
                        <div className="flex gap-1 items-center">
                          {verified && (
                            <img
                              src={verifiedIcon}
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
                </Link>
                {/*  */}
                {currentUser.userName === userName && (
                  <div className="flex gap-3 relative">
                    <img
                      src={optionsIcon}
                      className="w-5 hover:cursor-pointer"
                      onClick={() => toggleOptions(id)}
                      alt="options"
                    />
                    {currentUser.userName === userName &&
                      selectedPostId === id && (
                        <div
                          className={`${
                            hideOptions
                              ? "hidden"
                              : "flex flex-col gap-1 bg-slate-200/50 backdrop-blur-lg w-max p-2 px-4 rounded absolute top-5 right-0"
                          }`}
                        >
                          <span className="flex gap-2 hover:cursor-pointer">
                            <img src={editIcon} className="w-5" alt="edit" />
                            Edit
                          </span>
                          <span className="flex gap-2 hover:cursor-pointer">
                            <img
                              src={deleteIcon}
                              className="w-5"
                              alt="delete"
                            />
                            Delete
                          </span>
                        </div>
                      )}
                  </div>
                )}
              </div>
              {/*  */}
              <Link to={`/${userName}/post/${id}`}>
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
              </Link>
              {/*  */}
              <div className=" flex mt-1 gap-4">
                <div className="flex items-center gap-1 hover:cursor-pointer">
                  {hasLiked ? (
                    <div className="flex gap-1" onClick={() => unLikePost(id)}>
                      <img
                        src={filledHeartIcon}
                        alt="filled heart"
                        className="w-5"
                      />
                      <span className="w-2">{likedBy.length}</span>
                    </div>
                  ) : (
                    <div className="flex gap-1" onClick={() => likePost(id)}>
                      <img
                        src={emptyHeartIcon}
                        alt="empty heart"
                        className="w-5"
                      />
                      <span className="w-2">{likedBy.length}</span>
                    </div>
                  )}
                </div>
                {hasBookmarked ? (
                  <img
                    src={filledBookmarkIcon}
                    onClick={() => removeFromBookmark(id)}
                    alt="empty bookmark"
                    className="w-5 hover:cursor-pointer"
                  />
                ) : (
                  <img
                    src={emptyBookmarkIcon}
                    onClick={() => addToBookmark(id)}
                    alt="filled bookmark"
                    className="w-5 hover:cursor-pointer"
                  />
                )}
                <Link to={`/${userName}/post/${id}`}>
                  <div className="flex items-center gap-1 hover:cursor-pointer">
                    <img src={commentIcon} alt="comment" className="w-5" />
                    <span>{comments.length}</span>
                  </div>
                </Link>
              </div>
              {showComments && (
                <>
                  <br />
                  <hr />
                  <br />
                  <p className="font-semibold text-2xl">Comments</p>
                  <br />
                  <div className="flex flex-col gap-8 b-[1px]">
                    {post.comments.length === 0 ? (
                      <p className="text-center">No Comments</p>
                    ) : (
                      post.comments.map((user) => {
                        const {
                          id,
                          userName,
                          avatar,
                          fullName,
                          verified,
                          content,
                        } = user;
                        return (
                          <div
                            key={id}
                            className="flex flex-col gap-1 border-b-[1px] pb-5"
                          >
                            <Link to={`/${userName}`}>
                              <div className="flex items-center gap-1">
                                <img
                                  src={avatar}
                                  alt={fullName}
                                  className="w-7 pb-1 mr-[2px]"
                                />
                                <div className="flex flex-col gap-[2px]">
                                  <div className="flex items-center gap-1">
                                    <p className="font-medium text-sm">
                                      {fullName}
                                    </p>
                                    <div className="flex gap-1 items-center">
                                      {verified && (
                                        <img
                                          src={verifiedIcon}
                                          className="w-3"
                                          alt="verified"
                                        />
                                      )}
                                    </div>
                                  </div>
                                  <p className="font-light text-xs -mt-1">
                                    {userName}
                                  </p>
                                </div>
                              </div>
                            </Link>
                            <div>{content}</div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
