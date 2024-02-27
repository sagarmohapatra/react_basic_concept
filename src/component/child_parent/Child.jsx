import React, { useState } from 'react'

const Child = ({any,setany}) => {
    const [res,setres]=useState({name:"sipu"})
   
    const did=()=>{
      const copyres={...res}
      setany(copyres)
    
    }
  return (
    <div>
    <h1>i am child</h1>
        <p>{any}</p>
        <button onClick={did}>child_to_parent</button>
    </div>

  )
}

export default Child