import { useContext, useEffect } from "react";

import SecondarySidebar from "../components/Sidebars/SecondarySidebar";
import PrimarySidebar from "../components/Sidebars/PrimarySidebar";
import PostsListing from "../components/PostsListing";
import { PostsDataContext } from "../contexts/PostsDataContext";
import { AuthContext } from "../contexts/AuthContext";

export default function HomePage() {
  const API_URL = "https://cosmic-connect-api.abhisheky495.repl.co/postsdata";
  const {
    state: { postsData, postsLoading, postsDataError },
    dispatch,
  } = useContext(PostsDataContext);
  const { currentUser } = useContext(AuthContext);
  const currentUserFollowing = currentUser.following;

  const followingPosts = postsData.filter((post) => {
    return currentUserFollowing.includes(post.userName);
  });

  const getPosts = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch({ type: "GET_POSTS_DATA", payload: data });
      dispatch({ type: "FILTER_BY_CREATED_AT" });
    } catch (error) {
      dispatch({ type: "GET_POSTS_DATA_ERROR", payload: error });
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

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
