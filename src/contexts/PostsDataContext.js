import { createContext, useReducer } from "react";
import { initState, postsDataReducer } from "../reducers/postsDataReducer";

export const PostsDataContext = createContext();
export const PostsDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsDataReducer, initState);

  return (
    <PostsDataContext.Provider value={{ state, dispatch }}>
      {children}
    </PostsDataContext.Provider>
  );
};
