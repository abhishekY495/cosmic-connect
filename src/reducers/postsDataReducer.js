export const initState = {
  postsData: [],
  postsLoading: false,
  postsDataError: null,
  filterByCreatedAt: true,
  filterByTrending: false,
};

export const postsDataReducer = (state, action) => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        postsLoading: true,
      };
    }
    case "GET_POSTS_DATA": {
      return {
        ...state,
        postsData: action.payload,
        postsLoading: false,
      };
    }
    case "GET_POSTS_DATA_ERROR": {
      return {
        ...state,
        postsDataError: action.payload,
        postsLoading: false,
      };
    }
    case "FILTER_BY_CREATED_AT": {
      return {
        ...state,
        postsData: state.postsData.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        ),
        filterByCreatedAt: true,
        filterByTrending: false,
      };
    }
    case "FILTER_BY_TRENDING": {
      return {
        ...state,
        postsData: state.postsData.sort(
          (a, b) => b.likedBy.length - a.likedBy.length
        ),
        filterByCreatedAt: false,
        filterByTrending: true,
      };
    }
    default: {
      return state;
    }
  }
};
