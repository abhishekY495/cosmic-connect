import React from "react";

import loadingGif from "../assets/posts/loadingGif.gif";
import SinglePost from "./SinglePost";
import Filters from "./Filters";

export default function PostsListing({
  postsData,
  postsLoading,
  postsDataError,
  usersPost,
  showComments,
}) {
  return (
    <div className="flex flex-col relative pb-40 border-[1px] border-b-0">
      {!usersPost && !showComments && <Filters />}
      <div className="px-10">
        {postsLoading && (
          <div className="w-[500px] mx-auto pt-10">
            <img
              src={loadingGif}
              className="w-10 m-auto pt-8"
              alt="infinity loader"
            />
          </div>
        )}
        {postsDataError && (
          <p className="w-[500px] pt-10 text-center">
            Refresh or Try again later
          </p>
        )}
        {!postsLoading && postsData.length === 0 && (
          <p className="w-[500px] mx-auto pt-10 text-center">
            You dont follow nobody.
          </p>
        )}
        {postsData.map((post, index) => {
          return <SinglePost key={index} post={post} />;
        })}
      </div>
    </div>
  );
}
