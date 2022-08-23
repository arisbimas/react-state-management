import { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadState } from "../Untils/localStorage";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [user, setUser] = useState({ name: "", title: "" });

  const appStateObject = {
    user,
    setUser,
  };

  useEffect(() => {
    const userDataLS = loadState("userData");
    if (userDataLS?.user) {
      setUser(userDataLS.user);
    }
    return () => {};
  }, []);

  return (
    <Context.Provider value={appStateObject}>
      <Link style={{ padding: "10px" }} to="">
        Login
      </Link>
      <Link style={{ padding: "10px" }} to="/home">
        Home
      </Link>
      <Link style={{ padding: "10px" }} to="/about">
        About
      </Link>
      <Link style={{ padding: "10px" }} to="/contact">
        Contact
      </Link>
      {children}
    </Context.Provider>
  );
};

export const UserContext = () => {
  return useContext(Context);
};
