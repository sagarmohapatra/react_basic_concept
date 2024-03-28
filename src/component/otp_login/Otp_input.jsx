import React, { useEffect, useRef, useState } from "react";

const Otp_input = ({ length, onOtpSubmit }) => {
  const [otp, setotp] = useState(new Array(length).fill(""));
  const inputref = useRef([]);
  console.log(inputref);
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setotp(newOtp);
    const combineOtp = newOtp.join("");
    if (combineOtp.length === length) {
      onOtpSubmit(combineOtp);
    }
    // move to next input if current field is filled
    if (value && index < length - 1 && inputref.current[index + 1]) {
      inputref.current[index + 1].focus();
    }
    console.log(combineOtp);
  };

  const handleClick = (index) => {
    inputref.current[index].setSelectionRange(0, 1);
    if (index > 0 && !otp[index - 1]) {
      inputref.current[otp.indexOf("")].focus();
    }
  };
  const handleKeyDown = (index, e) => {
    if (
      e.key === "backspace" &&
      !otp[index] &&
      index > 0 &&
      inputref.current[index - 1]
    ) {
      inputref.current[index + 1].focus();
    }
  };
  console.log(otp);
  useEffect(() => {
    if (inputref.current[0]) {
      inputref.current[0].focus();
    }
  });
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            style={{ width: "40px", height: "40px", margin: "5px" }}
            key={index}
            type="text"
            ref={(input) => (inputref.current[index] = index)}
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        );
      })}
    </div>
  );
};

export default Otp_input;
