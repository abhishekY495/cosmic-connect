import React, { useContext } from "react";

import loadingGif from "../assets/posts/loadingGif.gif";
import SinglePost from "./SinglePost";
import Filters from "./Filters";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function PostsListing({
  postsData,
  postsLoading,
  postsDataError,
  filters,
  profilePage,
  userProfile,
  homePage,
  bookmarkPage,
}) {
  const { currentUser } = useContext(AuthContext);
  const {
    theme: { darkMode },
  } = useContext(ThemeContext);

  return (
    <div className="flex flex-col relative pb-40 border border-zinc-200 border-t-0 border-b-0 max-[800px]:w-full max-[800px]:border-l-0 max-[800px]:border-r-0">
      {filters && <Filters />}
      {bookmarkPage && (
        <p
          className={`${
            darkMode && "text-black"
          } sticky top-0 z-[1] w-full py-3 pl-5 border-b bg-zinc-300/60 backdrop-blur-lg font-medium text-xl max-[800px]:p-2 max-[800px]:pl-3`}
        >
          Bookmark Posts
        </p>
      )}
      {/*  */}
      <div className="w-[550px] max-[800px]:w-full">
        {postsLoading && (
          <div className="w-full mx-auto pt-10">
            <img
              src={loadingGif}
              className="w-10 m-auto pt-8 rounded-full"
              alt="infinity loader"
            />
          </div>
        )}
        {postsDataError && (
          <p className="w-full pt-10 text-center">
            Refresh or Try again later
          </p>
        )}
        {/*  */}
        {!postsLoading &&
          !postsDataError &&
          homePage &&
          postsData?.length === 0 && (
            <p className="w-full mx-auto pt-10 text-center">
              You follow nobody...
            </p>
          )}
        {/*  */}
        {!postsLoading &&
        profilePage &&
        userProfile?.userName === currentUser?.userName &&
        postsData?.length === 0 ? (
          <p className="w-full mx-auto pt-10 text-center">
            Post Something...
          </p>
        ) : (
          !postsLoading &&
          profilePage &&
          postsData?.length === 0 && (
            <p className="w-full mx-auto pt-10 text-center">
              {userProfile &&
                `${userProfile?.fullName} hasn't posted anything.`}
            </p>
          )
        )}
        {/*  */}
        {!postsLoading &&
          !postsDataError &&
          bookmarkPage &&
          postsData.length === 0 && (
            <p className="w-full mx-auto pt-10 text-center">
              Nothing to show...
            </p>
          )}
        {/*  */}
        {postsData?.map((post, index) => {
          return <SinglePost key={index} post={post} />;
        })}
      </div>
    </div>
  );
}
