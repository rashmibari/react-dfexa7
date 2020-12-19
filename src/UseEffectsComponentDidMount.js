import React, { useEffect, useState } from "react";

function UseEffectsComponentDidMount() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Component did Mount Exmaple");
  }, []); // Component did mount implemented

  useEffect(() => {
    console.log("Component did Update Exmaple");
  }, [count]); // Component did update implemented

  useEffect(() => {
    //if use Effects function returning any other function then that is the component will unmount implementation

    return () => {
      console.log("wihtin component will unmount function");
    };
  }); // Component will unmount implemented

  return (
    <div>
      <p>Component did mount implementation</p>
      <button onClick={() => setCount(preState => preState + 1)}>
        Count:{count}
      </button>
      <p>Component will unmount example</p>
    </div>
  );
}

export default UseEffectsComponentDidMount;
