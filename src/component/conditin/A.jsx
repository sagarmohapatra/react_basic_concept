import React, { useState } from "react";
import B from "./B";
import C from "./C";
const A = () => {
  const [showB, setshowB] = useState(false);
  const [showC, setShowC] = useState(false);
  const [text, settext] = useState("");
  const handleInputChange = (e) => {
    settext(e.target.value);
    setshowB(true);
    setShowC(true);
  };
  return (
    <div>
      <input onChange={handleInputChange} type="text" />
      {/* {showB && <B text={text} />} */}
      {/* {showC && <C text={text} />} */}
      <B text={text} />
      <C text={text} />
    </div>
  );
};

export default A;
