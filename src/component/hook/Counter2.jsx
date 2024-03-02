import React from "react";
import useCounter from "./useCounter";
const Counter2 = () => {
  const [count, Increment, decrement] = useCounter(10);
  return (
    <div>
      <div>{count}</div>
      <button onClick={Increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter2;