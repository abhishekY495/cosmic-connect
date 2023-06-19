import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import emptyHeartIcon from "../assets/posts/empty-heart-icon.svg";
import emptyBookmarkIcon from "../assets/posts/empty-bookmark-icon.svg";
import filledHeartIcon from "../assets/posts/filled-heart-icon.svg";
import filledBookmarkIcon from "../assets/posts/filled-bookmark-icon.svg";
import commentIcon from "../assets/posts/comment-icon.svg";
import verifiedIcon from "../assets/profile/verified.svg";
import { PostsDataContext } from "../contexts/PostsDataContext";
import { AuthContext } from "../contexts/AuthContext";
import PrimarySidebar from "./Sidebars/PrimarySidebar";
import SecondarySidebar from "./Sidebars/SecondarySidebar";

export default function SinglePost() {
  const {
    state: { postsData },
    dispatch,
  } = useContext(PostsDataContext);
  const { currentUser } = useContext(AuthContext);
  const { postId } = useParams();

  const post = postsData.find((post) => post.id === postId);
  console.log(post);

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

  const hasLiked = post?.likedBy.find((user) => {
    return user.userName === currentUser.userName;
  });
  const hasBookmarked = post?.bookmarkedBy.find((user) => {
    return user.userName === currentUser.userName;
  });

  return (
    <>
      <div className="flex justify-center gap-10">
        <PrimarySidebar />
        <div key={post?.id} className="w-[500px] border-b-[1px] py-7">
          <Link to={`/${post?.userName}`}>
            <div className="flex items-center gap-1">
              <img
                src={post?.avatar}
                alt={post?.fullName}
                className="w-9 pb-1 mr-[2px]"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <p className="font-semibold">{post?.fullName}</p>
                  <div className="flex gap-1 items-center">
                    {post?.verified && (
                      <img
                        src="https://img.icons8.com/?size=24&id=2sZ0sdlG9kWP&format=svg"
                        className="w-4"
                        alt="verified"
                      />
                    )}
                    <span>•</span>
                    <p className="font-light text-sm">
                      {formatDate(post?.createdAt)}
                    </p>
                  </div>
                </div>
                <p className="font-light text-sm -mt-1">{post?.userName}</p>
              </div>
            </div>
          </Link>
          {/*  */}
          <Link to={`/${post?.userName}/post/${post?.id}`}>
            <p className="py-1">{post?.content}</p>
            {post?.media.image && (
              <img
                src={post?.media.image}
                alt={`post by ${post?.fullName}`}
                className="object-contain w-full h-96 bg-zinc-950"
              />
            )}
            {post?.media.video && (
              <iframe
                src={post?.media.video}
                title={post?.media.content}
                className="w-full h-96"
                allowFullScreen
              ></iframe>
            )}
          </Link>
          {/*  */}
          <div className=" flex mt-1 gap-4">
            <div className="flex items-center gap-1 hover:cursor-pointer">
              {hasLiked ? (
                <div
                  className="flex gap-1"
                  onClick={() => unLikePost(post?.id)}
                >
                  <img
                    src={filledHeartIcon}
                    alt="filled heart"
                    className="w-5"
                  />
                  <span className="w-2">{post?.likedBy.length}</span>
                </div>
              ) : (
                <div className="flex gap-1" onClick={() => likePost(post?.id)}>
                  <img src={emptyHeartIcon} alt="empty heart" className="w-5" />
                  <span className="w-2">{post?.likedBy.length}</span>
                </div>
              )}
            </div>
            {hasBookmarked ? (
              <img
                src={filledBookmarkIcon}
                onClick={() => removeFromBookmark(post?.id)}
                alt="empty bookmark"
                className="w-5 hover:cursor-pointer"
              />
            ) : (
              <img
                src={emptyBookmarkIcon}
                onClick={() => addToBookmark(post?.id)}
                alt="filled bookmark"
                className="w-5 hover:cursor-pointer"
              />
            )}
            <div className="flex items-center gap-1 hover:cursor-pointer">
              <img src={commentIcon} alt="comment" className="w-5" />
              <span>{post?.comments.length}</span>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <p className="font-semibold text-2xl">Comments</p>
          <br />
          <div className="flex flex-col gap-8 b-[1px]">
            {post?.comments.map((user) => {
              const { userName, avatar, fullName, verified, content } = user;
              return (
                <div className="flex flex-col gap-1 border-b-[1px] pb-5">
                  <Link to={`/${userName}`}>
                    <div className="flex items-center gap-1">
                      <img
                        src={avatar}
                        alt={fullName}
                        className="w-7 pb-1 mr-[2px]"
                      />
                      <div className="flex flex-col gap-[2px]">
                        <div className="flex items-center gap-1">
                          <p className="font-medium text-sm">{fullName}</p>
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
                        <p className="font-light text-xs -mt-1">{userName}</p>
                      </div>
                    </div>
                  </Link>
                  <div>{content}</div>
                </div>
              );
            })}
          </div>
        </div>
        <SecondarySidebar />
      </div>
    </>
  );
}
