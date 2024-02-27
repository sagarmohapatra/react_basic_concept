import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [any, setany] = useState({ name: "sagar" });
 
  return (
    <div>
      <h1>i am from parent</h1>
      <p>{any.name}</p>
      <Child any={any.name} setany={setany} />
    </div>
  );
};

export default Parent;
