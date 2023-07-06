import React, { useContext } from "react";

import loadingGif from "../assets/posts/loadingGif.gif";
import SinglePost from "./SinglePost";
import Filters from "./Filters";
import { AuthContext } from "../contexts/AuthContext";

export default function PostsListing({
  postsData,
  postsLoading,
  postsDataError,
  usersPost,
  showComments,
  userProfile,
}) {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex flex-col relative pb-40 border-[1px] border-b-0">
      {!usersPost && !showComments && <Filters />}
      <div className="">
        {postsLoading && (
          <div className="w-[550px] mx-auto pt-10">
            <img
              src={loadingGif}
              className="w-10 m-auto pt-8"
              alt="infinity loader"
            />
          </div>
        )}
        {postsDataError && (
          <p className="w-[550px] pt-10 text-center">
            Refresh or Try again later
          </p>
        )}
        {userProfile?.userName === currentUser?.userName &&
        postsData?.length === 0 ? (
          <p className="w-[550px] mx-auto pt-10 text-center">
            Post Something...
          </p>
        ) : usersPost && postsData.length === 0 ? (
          <p className="w-[550px] mx-auto pt-10 text-center">
            {userProfile.fullName} hasn't posted anything.
          </p>
        ) : (
          !postsLoading &&
          postsData.length === 0 && (
            <p className="w-[550px] mx-auto pt-10 text-center">
              You follow nobody...
            </p>
          )
        )}
        {postsData.map((post, index) => {
          return <SinglePost key={index} post={post} />;
        })}
      </div>
    </div>
  );
}
