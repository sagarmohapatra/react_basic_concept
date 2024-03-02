import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:3030/users/" + id)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:3030/users/"+id,data)
    .then(res=>{
        alert("data update successfuly")
        navigate("/")
    })
  }
  return (
    <div>
      <form onSubmit={handleClick}>
        <div className="w-50 border bg-light p-5">
          <div>
            <label htmlFor="name">ID:</label>
            <input
              type="text"
              name="name"
              disabled
              className="form-control"
              value={data.id}
              
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={data.name}
              onChange={(e)=>setdata({...data,name:e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={data.email}
              onChange={(e)=>setdata({...data,email:e.target.value})}
            />
          </div>
          <br />
          <button className="btn btn-info" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
