import { createContext, useState, useEffect } from "react";

export const PostsDataContext = createContext();
export const PostsDataContextProvider = ({ children }) => {
  const API_URL = "https://cosmic-connect-api.abhisheky495.repl.co/postsdata";
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postsDataError, setPostsDataError] = useState();

  const getPostsData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setPostsData(data);
    } catch (error) {
      console.error(error);
      setPostsDataError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <PostsDataContext.Provider value={{ postsData, loading, postsDataError }}>
      {children}
    </PostsDataContext.Provider>
  );
};
