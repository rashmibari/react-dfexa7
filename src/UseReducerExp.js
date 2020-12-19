import React, { useReducer } from "react";

let decrementBtnStyle = {
  fontSize: "16px",
  color: "green",
  marginLeft: "5px",
  background: "black"
};
let inititalState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return inititalState;
  }
};
function useReduceExp() {
  const [counter, dispatch] = useReducer(reducer, inititalState);

  return (
    <div>
      <h1>{counter}</h1>
      <button style={decrementBtnStyle} onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button style={decrementBtnStyle} onClick={() => dispatch("decrement")}>
        Decrement
      </button>
      <button style={{ color: "red" }} onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
}

export default useReduceExp;
