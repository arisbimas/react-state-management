import React, { useEffect } from "react";
import { UserContext } from "../Context/AppContext";

const About = () => {
  const { user } = UserContext();

  useEffect(() => {
    // console.log(user);
    return () => {};
  }, []);

  return (
    <div>
      About
      <p>PROTECTED PAGE</p>
      <p>{`user data: ${JSON.stringify(user)}`}</p>
    </div>
  );
};

export default About;
