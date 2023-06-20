import { useContext } from "react";

import SecondarySidebar from "../components/Sidebars/SecondarySidebar";
import PrimarySidebar from "../components/Sidebars/PrimarySidebar";
import PostsListing from "../components/PostsListing";
import { PostsDataContext } from "../contexts/PostsDataContext";
import { AuthContext } from "../contexts/AuthContext";

export default function HomePage() {
  const {
    state: { postsData, postsLoading, postsDataError },
  } = useContext(PostsDataContext);
  const { currentUser } = useContext(AuthContext);
  const currentUserFollowing = currentUser.following;

  const followingPosts = postsData.filter((post) => {
    return currentUserFollowing.includes(post.userName);
  });

  return (
    <div className="flex justify-center gap-10">
      <PrimarySidebar />
      <PostsListing
        postsData={followingPosts}
        postsLoading={postsLoading}
        postsDataError={postsDataError}
      />
      <SecondarySidebar />
    </div>
  );
}
