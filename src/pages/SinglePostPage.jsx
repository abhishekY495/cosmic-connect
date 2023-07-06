import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { PostsDataContext } from "../contexts/PostsDataContext";
import PrimarySidebar from "../components/Sidebars/PrimarySidebar";
import SecondarySidebar from "../components/Sidebars/SecondarySidebar";
import SinglePost from "../components/SinglePost";

export default function SinglePostPage() {
  const {
    state: { postsData },
  } = useContext(PostsDataContext);
  const { postId } = useParams();

  const post = postsData.find((post) => post.id === postId);

  return (
    <>
      <div className="flex justify-center gap-10">
        <PrimarySidebar />
        <div className="border-[1px]">
          <SinglePost post={post} showComments />
        </div>
        <SecondarySidebar />
      </div>
    </>
  );
}
