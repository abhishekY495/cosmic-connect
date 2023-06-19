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
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
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
    case "LIKE_POST": {
      const { postId, currentUser } = action.payload;
      const newPostsData = state.postsData.map((post) => {
        if (post.id === postId) {
          return { ...post, likedBy: [...post.likedBy, currentUser] };
        } else {
          return post;
        }
      });
      return {
        ...state,
        postsData: newPostsData,
      };
    }
    case "UN_LIKE_POST": {
      const { postId, currentUser } = action.payload;
      const newPostsData = state.postsData.map((post) => {
        if (post.id === postId) {
          const newLikedBy = post.likedBy.filter(
            (user) => user.userName !== currentUser.userName
          );
          return { ...post, likedBy: newLikedBy };
        } else {
          return post;
        }
      });
      return {
        ...state,
        postsData: newPostsData,
      };
    }
    case "ADD_TO_BOOKMARK": {
      const { postId, currentUser } = action.payload;
      const newPostsData = state.postsData.map((post) => {
        if (post.id === postId) {
          return { ...post, bookmarkedBy: [...post.bookmarkedBy, currentUser] };
        } else {
          return post;
        }
      });
      return {
        ...state,
        postsData: newPostsData,
      };
    }
    case "REMOVE_FROM_BOOKMARK": {
      const { postId, currentUser } = action.payload;
      const newPostsData = state.postsData.map((post) => {
        if (post.id === postId) {
          const newBookmarkedBy = post.bookmarkedBy.filter(
            (user) => user.userName !== currentUser.userName
          );
          return { ...post, bookmarkedBy: newBookmarkedBy };
        } else {
          return post;
        }
      });
      return {
        ...state,
        postsData: newPostsData,
      };
    }
    default: {
      return state;
    }
  }
};
