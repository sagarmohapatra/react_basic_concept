import React, { useState } from 'react'
import useCounter from './useCounter'
import Counter1 from './Counter1'
import Counter2 from './Counter2'
const Custom = () => {
   
  return (
    <div>
        {/* {/* custom Hook---- *} */}

        {/* ---------------------------- */}
        {/* *----A custom hook is a javascript function whose name start with "use" */}
        {/* *---we can use other hooks in custom hooks as well */}


        {/* why to use custom hook */}
        {/* to remove the dublicate logic in component and we can extract that logic to custom hook */}
        <Counter1/>
        <Counter2/>
    </div>
  )
}

export default Custom