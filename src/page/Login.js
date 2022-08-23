import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../Context/AppContext";
import { saveState } from "../Untils/localStorage";

const btn = {
  padding: "15px 10px",
  cursor: "pointer",
  margin: "10px 10px",
};
export default function Login() {
  const { user, setUser } = UserContext();
  const navigate = useNavigate();

  const handleSet = () => {
    setUser({ ...user, name: "ARIS", title: "TEST FOR ANOTHER PAGE" });
    saveState("userData", {
      user: { name: "ARIS", title: "TEST FOR ANOTHER PAGE" },
    });
  };

  const handleClear = () => {
    setUser({ ...user, name: "", title: "" });
  };

  useEffect(() => {
    console.log("from login=>", user);
    user?.name && navigate("about");
    return () => {};
  }, [user]);

  return (
    <div>
      LOGIN
      <div>
        <button style={btn} onClick={() => handleSet()}>
          Set User
        </button>
        <button style={btn} onClick={() => handleClear()}>
          Clear User
        </button>
      </div>
    </div>
  );
}
