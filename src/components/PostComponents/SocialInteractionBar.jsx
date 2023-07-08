import React, { useContext } from "react";
import { Link } from "react-router-dom";

import emptyHeartIcon from "../../assets/posts/empty-heart-icon.svg";
import emptyBookmarkIcon from "../../assets/posts/empty-bookmark-icon.svg";
import filledHeartIcon from "../../assets/posts/filled-heart-icon.svg";
import filledBookmarkIcon from "../../assets/posts/filled-bookmark-icon.svg";
import commentIcon from "../../assets/posts/comment-icon.svg";
import { AuthContext } from "../../contexts/AuthContext";
import { PostsDataContext } from "../../contexts/PostsDataContext";

export default function SocialInteractionBar({ post }) {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(PostsDataContext);

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

  const hasLiked = post?.likedBy?.find((user) => {
    return user.userName === currentUser.userName;
  });
  const hasBookmarked = post?.bookmarkedBy?.find((user) => {
    return user.userName === currentUser.userName;
  });

  return (
    <div className=" flex mt-1 gap-4">
      <div className="flex items-center gap-1 hover:cursor-pointer">
        {hasLiked ? (
          <div className="flex gap-1" onClick={() => unLikePost(post?.id)}>
            <img src={filledHeartIcon} alt="filled heart" className="w-5" />
            <span className="w-2">{post?.likedBy?.length}</span>
          </div>
        ) : (
          <div className="flex gap-1" onClick={() => likePost(post?.id)}>
            <img src={emptyHeartIcon} alt="empty heart" className="w-5" />
            <span className="w-2">{post?.likedBy?.length}</span>
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
      <Link to={`/${post?.userName}/post/${post?.id}`}>
        <div className="flex items-center gap-1 hover:cursor-pointer">
          <img src={commentIcon} alt="comment" className="w-5" />
          <span>{post?.comments?.length}</span>
        </div>
      </Link>
    </div>
  );
}
