import React, { useState } from "react";

const useCounter = (initialValue=0) => {
  const [count, setcount] = useState(initialValue);
  const Increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };
  return [count,Increment,decrement]
};

export default useCounter;
