export const initState = {
  usersData: [],
  usersDataLoading: false,
  usersDataError: null,
};

export const usersDataReducer = (state, action) => {
  switch (action.type) {
    case "USERS_DATA_LOADING": {
      return {
        ...state,
        usersDataLoading: true,
      };
    }
    case "GET_USERS_DATA": {
      return {
        ...state,
        usersData: action.payload,
        usersDataLoading: false,
      };
    }
    case "GET_USERS_DATA_ERROR": {
      return {
        ...state,
        usersDataError: action.payload,
        usersDataLoading: false,
      };
    }
    case "FOLLOW": {
      const { username, currentUser } = action.payload;
      const userProfile = state.usersData.find(
        (user) => user.userName === username
      );

      if (!userProfile.followers.includes(currentUser)) {
        const newUserProfileData = {
          ...userProfile,
          followers: [...userProfile.followers, currentUser],
        };

        const newCurrentUserData = {
          ...currentUser,
          following: [...currentUser.following, userProfile],
        };

        localStorage.setItem("currentUser", JSON.stringify(newCurrentUserData));

        const updatedUsersData = state.usersData.map((user) => {
          if (user.userName === username) {
            return newUserProfileData;
          }
          if (user.userName === currentUser.userName) {
            return newCurrentUserData;
          }
          return user;
        });

        return {
          ...state,
          usersData: updatedUsersData,
        };
      } else {
        return { ...state };
      }
    }
    case "UN_FOLLOW": {
      const { username, currentUser } = action.payload;
      const userProfile = state.usersData.find(
        (user) => user.userName === username
      );

      const newUserProfileData = {
        ...userProfile,
        followers: userProfile.followers.filter(
          (user) => user.userName !== currentUser.userName
        ),
      };

      const newCurrentUserData = {
        ...currentUser,
        following: currentUser.following.filter(
          (user) => user.userName !== username
        ),
      };

      localStorage.setItem("currentUser", JSON.stringify(newCurrentUserData));

      const updatedUsersData = state.usersData.map((user) => {
        if (user.userName === username) {
          return newUserProfileData;
        }
        if (user.userName === currentUser.userName) {
          return newCurrentUserData;
        }
        return user;
      });

      return {
        ...state,
        usersData: updatedUsersData,
      };
    }
  }
};
