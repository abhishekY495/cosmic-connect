import React, { useContext } from "react";

import { PostsDataContext } from "../contexts/PostsDataContext";
import { AuthContext } from "../contexts/AuthContext";
import { UsersDataContext } from "../contexts/UsersDataContext";
import PrimarySidebar from "../components/Sidebars/PrimarySidebar";
import SecondarySidebar from "../components/Sidebars/SecondarySidebar";
import PostsListing from "../components/PostsListing";

export default function BookmarkedPage() {
  const {
    state: { postsData, postsLoading, postsDataError },
  } = useContext(PostsDataContext);
  const { currentUser } = useContext(AuthContext);
  const {
    state: { usersData },
  } = useContext(UsersDataContext);

  const userProfile = usersData?.find(
    (user) => user.userName === currentUser?.userName
  );

  const bookmarkedPosts = postsData.filter((post) =>
    post.bookmarkedBy.find((user) => user.userName === userProfile?.userName)
  );

  return (
    <div className="flex justify-center gap-10">
      <PrimarySidebar />
      <PostsListing
        postsData={bookmarkedPosts}
        postsLoading={postsLoading}
        postsDataError={postsDataError}
        bookmarkPage
      />
      <SecondarySidebar />
    </div>
  );
}
