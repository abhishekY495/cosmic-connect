import { createContext, useState, useEffect } from "react";

export const UsersDataContext = createContext();
export const UsersDataContextProvider = ({ children }) => {
  const API_URL = "https://cosmic-connect-api.abhisheky495.repl.co/usersdata";
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [usersDataError, setUsersDataError] = useState();

  const getusersData = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsersData(data);
    } catch (error) {
      console.error(error);
      setUsersDataError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getusersData();
  }, []);

  return (
    <UsersDataContext.Provider value={{ usersData, loading, usersDataError }}>
      {children}
    </UsersDataContext.Provider>
  );
};
