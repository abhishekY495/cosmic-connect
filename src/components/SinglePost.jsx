import React from "react";

import UserInfo from "./PostComponents/UserInfo";
import PostContent from "./PostComponents/PostContent";
import SocialInteractionBar from "./PostComponents/SocialInteractionBar";
import Comments from "./PostComponents/Comments";

export default function SinglePost({ post, showComments }) {
  return (
    <div
      key={post?.id}
      className={`${showComments ? "" : "border-b-[1px]"} w-[500px] mx-auto py-7`}
    >
      <UserInfo post={post} showComments />
      <PostContent post={post} />
      <SocialInteractionBar post={post} />
      {showComments && <Comments comments={post?.comments} />}
    </div>
  );
}
