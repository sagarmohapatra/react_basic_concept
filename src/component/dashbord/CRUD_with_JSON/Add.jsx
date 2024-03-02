import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [inputData, setinputData] = useState({
    name: "",
    
    email: "",
  });

  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3030/users", inputData) //where we add inputData in url for add form data
      .then((res) => {
        alert("data added successfully");
        navigate("/")
      }).catch(err=>console.log(err))
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="w-50 border bg-light p-5">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(e) =>
                setinputData({ ...inputData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={(e) =>
                setinputData({ ...inputData, email: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
