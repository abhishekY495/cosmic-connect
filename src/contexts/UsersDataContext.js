import { createContext, useReducer } from "react";
import { initState, usersDataReducer } from "../reducers/usersDataReducer";

export const UsersDataContext = createContext();
export const UsersDataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersDataReducer, initState);

  return (
    <UsersDataContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersDataContext.Provider>
  );
};
