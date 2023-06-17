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
    <div className="flex sticky top-6">
      <button
        onClick={latestBtnHandler}
        className={`w-full ${
          filterByCreatedAt
            ? "bg-zinc-500/50 backdrop-blur-xl"
            : "bg-zinc-300/50 backdrop-blur-xl"
        }`}
      >
        Latest
      </button>
      <button
        onClick={trendingBtnHandler}
        className={`w-full ${
          filterByTrending
            ? "bg-zinc-500/50 backdrop-blur-xl"
            : "bg-zinc-300/50 backdrop-blur-xl"
        }`}
      >
        Trending
      </button>
    </div>
  );
}
