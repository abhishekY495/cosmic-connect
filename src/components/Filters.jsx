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
    <div className="flex sticky top-0 z-[1] border-b">
      <button
        onClick={latestBtnHandler}
        className={`w-full p-3 text-xl backdrop-blur-3xl max-[800px]:p-2 ${
          filterByCreatedAt
            ? "bg-slate-400/60 font-medium"
            : "bg-slate-200/60 font-light"
        }`}
      >
        Latest {filterByCreatedAt && "📅"}
      </button>
      <button
        onClick={trendingBtnHandler}
        className={`w-full p-3 text-xl backdrop-blur-3xl max-[800px]:p-2 ${
          filterByTrending
            ? "bg-slate-400/60 font-medium"
            : "bg-slate-200/60 font-light"
        }`}
      >
        Trending {filterByTrending && "🔥"}
      </button>
    </div>
  );
}
