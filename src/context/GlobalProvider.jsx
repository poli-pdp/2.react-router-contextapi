/* eslint-disable react/prop-types */
import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 10,
    name: "Pedro",
  });
  const changeName = (name) => {
    const newUser = {
      id: 20,
      name,
    };
    setUser(newUser);
  };
  return (
    <GlobalContext.Provider
      value={{ message: "hola", active: true, user, changeName }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
