import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import PrimarySidebar from "../components/Sidebars/PrimarySidebar";
import SecondarySidebar from "../components/Sidebars/SecondarySidebar";
import PostsListing from "../components/PostsListing";
import UserProfile from "../components/UserProfile";
import { UsersDataContext } from "../contexts/UsersDataContext";
import { PostsDataContext } from "../contexts/PostsDataContext";

export default function Profile() {
  const { username } = useParams();
  const {
    state: { postsData },
    dispatch: postsDispatch,
  } = useContext(PostsDataContext);
  const {
    state: { usersData, usersDataLoading },
  } = useContext(UsersDataContext);

  const userProfile = usersData?.find((user) => user.userName === username);
  const userPosts = postsData?.filter((post) => post.userName === username);

  useEffect(() => {
    postsDispatch({ type: "FILTER_BY_CREATED_AT" });
  }, []);

  return (
    <div className="flex justify-center gap-10">
      <PrimarySidebar />
      <div className="">
        {usersDataLoading && <p>Getting user data</p>}
        {!usersData ? (
          <div className="pb-2 sticky top-0 bg-slate-400/80 backdrop-blur-3xl z-[1]">
            <p className="font-medium text-center py-10">
              User profile not found.
            </p>
          </div>
        ) : (
          <>
            <UserProfile username={username} userProfile={userProfile} />
            <PostsListing postsData={userPosts} usersPost />
          </>
        )}
      </div>
      <SecondarySidebar />
    </div>
  );
}
