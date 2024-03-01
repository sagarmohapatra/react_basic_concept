import React, { useEffect, useState } from "react";

const Search = () => {
  const [store, setstore] = useState([]);
  const [ress, setress] = useState("");
  console.log(store);
  const data = "https://jsonplaceholder.typicode.com/users";
  const res = async () => {
    let did = await fetch(data);
    let dg = await did.json();
    setstore(dg);
  };
  useEffect(() => {
    res();
  }, []);
  const did = (e) => {
    setress(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="search here"
          value={ress}
          onChange={did}
        />
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sl no</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {/* {store.filter((did) => {
              return ress.toLowerCase() === ""? did: did.name.toLowerCase().includes(ress);
            }) */}
          {store.filter((did)=>{
            return ress.toLowerCase()=== ""? did:did.name.toLowerCase().includes(ress)
          })
            .map((res) => (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.username}</td>
                <td>{res.email}</td>
                <td>{res.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
