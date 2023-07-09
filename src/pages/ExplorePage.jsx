import React, { useContext } from "react";

import { PostsDataContext } from "../contexts/PostsDataContext";
import PrimarySidebar from "../components/Sidebars/PrimarySidebar";
import SecondarySidebar from "../components/Sidebars/SecondarySidebar";
import PostsListing from "../components/PostsListing";

export default function ExplorePage() {
  const {
    state: { postsData, postsLoading, postsDataError },
  } = useContext(PostsDataContext);

  return (
    <div className="flex justify-center gap-10">
      <PrimarySidebar />
      <PostsListing
        postsData={postsData}
        postsLoading={postsLoading}
        postsDataError={postsDataError}
        filters
      />
      <SecondarySidebar />
    </div>
  );
}
