import React, { useState } from "react";

const Table_api = () => {
  const [put, setput] = useState({
    name: "",
    mail: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    console.log(put);
    fetch("https://jsonplaceholder.typicode.com/user s",{
        method:"POST",
        headers:{'Content-type':"aplication/json"},
        body:JSON.stringify({
            title:put.name
        })
    }).then(res=>res.json()).then((json)=>{
        console.log("res",json);
    })
  };
  const change = (e) => {
    const copyput = { ...put };
    copyput[e.target.name] = e.target.value
    setput(copyput);
  };
  return (
    <div>
      <form onSubmit={ handleClick}>
        <input
          type="text"
          placeholder="Text name"
          name="name"
          value={put.name}
          onChange={change}
        />
        <br />
        <input
          type="gmail"
          placeholder="text gmail"
          name="mail"
          value={put.mail}
          onChange={ change}
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Table_api;
