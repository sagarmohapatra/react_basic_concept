import React, { useState } from "react";
import Otp_input from "./Otp_input";

const PhoneOtpLogin = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [showotp, setshowotp] = useState(false);

  const handlePhoneNumber = (e) => {
    setphoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      
      return alert("invalid number");
    }
    // call api
    //show otp filed
    setshowotp(true);
  };
  const onOtpSubmit=(otp)=>{
console.log("login successfully");
  }
  return (
    <div>
      <h1>LoginWithOTP</h1>
      {!showotp ? (
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="number"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          />
          <button type="submit">submit</button>
        </form>
      ) : (
        <><p>enter otp send to {phoneNumber}</p><Otp_input length={4} onOtpSubmit={onOtpSubmit} /></>
      )}
    </div>
  );
};

export default PhoneOtpLogin;
