import React, { useState } from "react";
import { usePrevious } from "./usePrevious";
import "../App.css";

const CounterExample = () => {
  const [count, setCount] = useState(0);

  const prevCount = usePrevious(count);

  return (
    <>
      <h1>CounterExample</h1>
      <h3>Previous Count : {prevCount} </h3>
      <h3>Current Count: {count} </h3>
      <button id="btn-primary" onClick={() => setCount(count + 1)}>
        Increment Count By 1
      </button>
    </>
  );
};

export default CounterExample;
