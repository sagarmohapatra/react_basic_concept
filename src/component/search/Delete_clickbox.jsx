import React, { useState } from "react";

const Delete_clickbox = () => {
  const arr = ["play cricket", "play football", "play badminton"];
  const [store, setstore] = useState(arr);
  const [res, setres] = useState(false);
  const [currentIndex,setcurrentIndex]=useState()
  console.log(store);
  const deletes = (index) => {
    console.log(index);
    let copyarr = [...store];
    copyarr.splice(index, 1);
    setstore(copyarr);
  };
  const change = (index,value) => {
    // console.log(index);
    //  const copyres=[...res]
    console.log("any",index,value);
          setres(!res )
          setcurrentIndex(index)
    // setres(!res);
  };
  return (
    <div>
      {store.map((data, index) => (
        <li key={index}>
          <input type="checkbox"  onClick={(e,index) => change(!e.target.value,index)} />
          {data}
          {res && currentIndex ===index  
          && (<button onClick={() => deletes(index)}>x</button>)}
        </li>
      ))}
    </div>
  );
};

export default Delete_clickbox;
