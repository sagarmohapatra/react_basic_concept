import React from "react";

const Edit = ({ data, store, setstore }) => {
  const handleinput = (e) => {

    const newstore = store.map(li =>(
      li.id === data.id ? { ...li, [e.target.name]: e.target.value } : li
     ) );
    setstore(newstore);
  };
  return (
    <div>
      <tbody>
        <tr>
          <td>
            <input
              type="text"
              name="name"
              onChange={handleinput}
              value={data.name}
            />
          </td>
          <td>
            <input
              type="text"
              name="price"
              onChange={handleinput}
              value={data.price}
            />
          </td>
          <button type="submit">update</button>
        </tr>
      </tbody>
    </div>
  );
};

export default Edit;
