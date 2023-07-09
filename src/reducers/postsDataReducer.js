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
    case "DELETE_POST": {
      const postId = action.payload;
      return {
        ...state,
        postsData: state.postsData.filter((post) => post.id !== postId),
      };
    }
    case "CREATE_POST": {
      const newPost = action.payload;
      const newPostsData = () => {
        if (state.filterByCreatedAt) {
          return [...state.postsData, newPost].sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
        } else if (state.filterByTrending) {
          return [...state.postsData, newPost].sort(
            (a, b) => b.likedBy.length - a.likedBy.length
          );
        }
      };
      return {
        ...state,
        postsData: newPostsData(),
      };
    }
    case "UPDATE_POST": {
      const { postToEdit, updatedPost } = action.payload;
      const newPostsData = state.postsData.map((post) => {
        if (post.id === postToEdit.id) {
          return updatedPost;
        } else {
          return post;
        }
      });
      return {
        ...state,
        postsData: newPostsData,
      };
    }
    case "UPDATE_USER_DATA": {
      const { updatedUserProfile, currentUser } = action.payload;
      const newPostsData = state.postsData.map((post) => {
        if (post.userName === currentUser.userName) {
          post = { ...post, ...updatedUserProfile };
        }

        const commentsData = post.comments.map((user) => {
          if (user.userName === currentUser.userName) {
            user = { ...user, ...updatedUserProfile };
          }
          return user;
        });

        const likedData = post.likedBy.map((user) => {
          if (user.userName === currentUser.userName) {
            user = { ...user, ...updatedUserProfile };
          }
          return user;
        });

        const bookmarkedByData = post.bookmarkedBy.map((user) => {
          if (user.userName === currentUser.userName) {
            user = { ...user, ...updatedUserProfile };
          }
          return user;
        });

        return {
          ...post,
          comments: [...commentsData],
          likedBy: [...likedData],
          bookmarkedBy: [...bookmarkedByData],
        };
      });

      return {
        ...state,
        postsData: newPostsData,
      };
    }
    case "ADD_COMMENT": {
      const { userComment, postId } = action.payload;
      const newPostsData = state.postsData.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, userComment] }
          : post
      );
      return {
        ...state,
        postsData: newPostsData,
      };
    }
    case "DELETE_COMMENT": {
      const { postId, commentId } = action.payload;
      const newPostsData = state.postsData.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.filter(
                (comment) => comment.id !== commentId
              ),
            }
          : post
      );
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
