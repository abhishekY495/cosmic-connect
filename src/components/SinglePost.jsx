import React, { useContext } from "react";

import UserInfo from "./PostComponents/UserInfo";
import PostContent from "./PostComponents/PostContent";
import SocialInteractionBar from "./PostComponents/SocialInteractionBar";
import Comments from "./PostComponents/Comments";
import { Link } from "react-router-dom";
import { PostsDataContext } from "../contexts/PostsDataContext";

export default function SinglePost({ post, showComments }) {
  const {
    state: { postsDataError },
  } = useContext(PostsDataContext);
  return post ? (
    <div
      key={post?.id}
      className={`${
        showComments ? "" : "border-b-[1px]"
      } w-[550px] mx-auto p-7 py-5 max-[800px]:w-[100%] max-[800px]:border-l-0 max-[800px]:border-r-0`}
    >
      <UserInfo post={post} showComments />
      <PostContent post={post} />
      <SocialInteractionBar post={post} />
      {showComments && <Comments comments={post?.comments} />}
    </div>
  ) : (
    <div className="flex flex-col items-center border-b-[1px] w-[550px] mx-auto p-7 max-[800px]:w-[100%] max-[800px]:border-l-0 max-[800px]:border-r-0">
      {postsDataError && (
        <>
          <p>Something went wrong.</p>
          <p>
            Go{" "}
            <Link className="text-blue-500" to="/home">
              Home
            </Link>{" "}
            or{" "}
            <Link className="text-blue-500" to="/explore">
              Explore
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
