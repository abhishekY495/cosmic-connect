import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { PostsDataContext } from "../contexts/PostsDataContext";
import PrimarySidebar from "./Sidebars/PrimarySidebar";
import SecondarySidebar from "./Sidebars/SecondarySidebar";
import PostsListing from "./PostsListing";

export default function SinglePost() {
  const {
    state: { postsData },
  } = useContext(PostsDataContext);
  const { postId } = useParams();

  const post = postsData.find((post) => post.id === postId);

  return (
    <>
      <div className="flex justify-center gap-10">
        <PrimarySidebar />
        <PostsListing postsData={[post]} showComments />
        <SecondarySidebar />
      </div>
    </>
  );
}
