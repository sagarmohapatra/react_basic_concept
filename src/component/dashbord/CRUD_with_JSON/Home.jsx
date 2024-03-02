import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const [store, setstore] = useState([]);
  console.log(store);
  const [record, setrecord] = useState([]);
  console.log(record);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3030/users").then((res) => {
      setstore(Object.keys(res.data[0]));

      setrecord(res.data);
    });
  }, []);

  const deletebtn = (id) => {
    const conf = window.confirm("do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:3030/users/" + id)
        .then((res) => {
          alert("record is deleted");
          navigate("/")
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="container mt-5">
      <div className="text-end">
        <Link to="/add" className="btn btn-primary">
          Add +
        </Link>
      </div>
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
          {record.map((dsa, index) => (
            <tr key={index}>
              <td>{dsa.id}</td>
              <td>{dsa.name}</td>
              <td>{dsa.username}</td>
              <td>{dsa.email}</td>

              <td>{dsa.phone}</td>
              <td>{dsa.website}</td>

              <td>
                <button
                  onClick={() => deletebtn(dsa.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={`/update/${dsa.id}`} className="btn  btn-success">
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
