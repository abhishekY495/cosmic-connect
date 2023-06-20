import React, { useContext } from "react";

import { PostsDataContext } from "../contexts/PostsDataContext";

export default function Filters() {
  const { state, dispatch } = useContext(PostsDataContext);
  const { filterByCreatedAt, filterByTrending } = state;

  const latestBtnHandler = () => {
    dispatch({ type: "FILTER_BY_CREATED_AT" });
  };
  const trendingBtnHandler = () => {
    dispatch({ type: "FILTER_BY_TRENDING" });
  };

  return (
    <div className="flex sticky top-0 z-[1]">
      <button
        onClick={latestBtnHandler}
        className={`w-full p-2 text-lg text-white ${
          filterByCreatedAt
            ? "bg-black/50 backdrop-blur-3xl underline"
            : "bg-zinc-500/50 backdrop-blur-3xl"
        }`}
      >
        Latest
      </button>
      <button
        onClick={trendingBtnHandler}
        className={`w-full p-2 text-lg text-white ${
          filterByTrending
            ? "bg-black/50 backdrop-blur-3xl underline"
            : "bg-zinc-500/50 backdrop-blur-3xl"
        }`}
      >
        Trending
      </button>
    </div>
  );
}
