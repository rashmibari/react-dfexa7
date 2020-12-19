import React, { useContext } from "react";
import { userContext, profileContext } from "./App";

function UseContextExpOne() {
  const user = useContext(userContext);
  const profile = useContext(profileContext);

  return (
    <div>
      <p style={{ color: "green" }}>User: {user}</p>
      <p style={{ color: "red" }}>Profile: {profile}</p>
    </div>
  );
}

export default UseContextExpOne;
