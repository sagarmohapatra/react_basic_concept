import React, { useState } from "react";
import Edit from "./Edit";

const SimpleDashbord = () => {
  const List = [
    { id: 1, name: "HP", price: "2344" },
    { id: 2, name: "ASUS", price: "45678" },
    { id: 3, name: "LENOVO", price: "45678" },
  ];
  const [store, setstore] = useState(List);
  const [updateState, setupdateState] = useState("");

  const handleEdit = (id) => {
    setupdateState(id);
    console.log(id);
  };
  const redd = (e) => {
  e.preventDefault()
    setupdateState("")
  };


  const deletevalue = (id, e) => {
    const res = store.filter((p) => p.id !== id);
    setstore(res);
  };

  return (
    <div>
      <form onSubmit={(e) => redd(e)}>
        <table>
          <tbody>
            {store.map((data) =>
              updateState === data.id ? (
                <Edit data={data} store={store} setstore={setstore} />
              ) : (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.price}</td>
                  <td>
                    <button onClick={(id) => deletevalue(data.id)}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleEdit(data.id)}>Edit</button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default SimpleDashbord;
