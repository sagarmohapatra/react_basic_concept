import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [store, setstore] = useState([]);
  console.log(store);
  const [record, setrecord] = useState([]);
  console.log(record);
  useEffect(() => {
    axios.get("http://localhost:3030/users").then((res) => {
      setstore(Object.keys(res.data[0]));
   
      setrecord(res.data);
    });
  }, []);
  return (
    <div className="container mt-5">
    <div className="text-end"><Link to="/add" className="btn btn-primary">Add +</Link></div>
      <table className="table">
        <thead>
          <tr>
            {store.map((res, index) => (
              <th key={index}>{res}</th>
            
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
              record.map((dsa,index)=>(
                <tr key={index}>
                    <td>{dsa.id}</td>
                    <td>{dsa.name}</td>
                    <td>{dsa.username}</td>
                    <td>{dsa.email}</td>
                    <td>{dsa.address.city}</td>
                    <td>{dsa.phone}</td>
                    <td>{dsa.website}</td>
                    <td>{dsa.company.name}</td>
                    <td><button>De/Up</button></td>
                </tr>
              ))  
            }
        </tbody>
      </table>
    </div>
  );
};

export default Home;
