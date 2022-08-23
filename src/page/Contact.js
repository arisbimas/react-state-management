import React from "react";
import { UserContext } from "../Context/AppContext";

export default function Contact() {
  const { user } = UserContext();

  return (
    <div>
      Contact
      <p>PROTECTED PAGE</p>
      <p>{`user data: ${JSON.stringify(user)}`}</p>
    </div>
  );
}
