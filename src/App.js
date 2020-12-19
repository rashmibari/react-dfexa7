import React from "react";
import "./style.css";
import UseReducerExp from "./UseReducerExp";
import UseContextExpOne from "./UseContextExpOne";
import UseEffectsComponentDidMount from "./UseEffectsComponentDidMount";

export const userContext = React.createContext();
export const profileContext = React.createContext();

export default function App() {
  return (
    <userContext.Provider value="userName">
      <profileContext.Provider value="profileName">
        <div>
          <h1>Hello StackBlitz!</h1>
          <p>Start editing to see some magic happen :)</p>
          <UseReducerExp />
          <UseContextExpOne />
          <UseEffectsComponentDidMount />
        </div>
      </profileContext.Provider>
    </userContext.Provider>
  );
}
