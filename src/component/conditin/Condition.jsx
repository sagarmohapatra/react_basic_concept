import React, { useState } from "react";
import A from "./A";
const Condition = () => {
  const [change, setchange] = useState(true);
  // console.log(change);
  //   1-process one
  //   const res = () => {
  //     setchange(!change);
  //   };

  // 2-second process

  //   const logout = () => {
  //     setchange(false);
  //   };
  //   const login = () => {
  //     setchange(true);
  //   };
  return (
    <div>
      {/* 1----------------- */}
      {/* <button onClick={res}>{change ?"hide":"show"}</button>
      { change ? <>
        <p>Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript 
        syntax like if statements, &&, and ? : operators.</p> </> :null} */}

      {/*2 ----------------------------================================================================ */}

      {/* {change ? 
        <>
          <h5>welcome back!!!</h5>
        </>
       : <p>Thank you vist again </p>}

      <button onClick={logout}>Logout</button>
      <button onClick={login}>Login</button> */}

      {/* 3--------------------------------------------------------------------------------- */}

      <A />
    </div>
  );
};

export default Condition;
