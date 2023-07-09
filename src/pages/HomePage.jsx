import { useContext } from "react";

import SecondarySidebar from "../components/Sidebars/SecondarySidebar";
import PrimarySidebar from "../components/Sidebars/PrimarySidebar";
import PostsListing from "../components/PostsListing";
import { PostsDataContext } from "../contexts/PostsDataContext";
import { AuthContext } from "../contexts/AuthContext";
import { UsersDataContext } from "../contexts/UsersDataContext";

export default function HomePage() {
  const {
    state: { postsData, postsLoading, postsDataError },
  } = useContext(PostsDataContext);
  const {
    state: { usersData },
  } = useContext(UsersDataContext);
  const { currentUser } = useContext(AuthContext);

  const userProfile = usersData?.find(
    (user) => user.userName === currentUser.userName
  );
  const currentUserProfileFollowing = userProfile?.following;

  const followingPosts =
    currentUserProfileFollowing?.length !== 0
      ? postsData?.filter((post) => {
          return currentUserProfileFollowing?.find((followingUser) => {
            return followingUser.userName === post.userName;
          });
        })
      : [];

  return (
    <div className="flex justify-center gap-10">
      <PrimarySidebar />
      <PostsListing
        postsData={followingPosts}
        postsLoading={postsLoading}
        postsDataError={postsDataError}
        filters
      />
      <SecondarySidebar />
    </div>
  );
}
