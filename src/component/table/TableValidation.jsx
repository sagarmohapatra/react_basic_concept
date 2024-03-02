import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  Typography,
  Divider,
  Input,
  Button,
  Box,
} from "@mui/material";
const TableValidation = () => {
    // getvalue
    const getvalue=()=>{
       const res= localStorage.getItem("any")
       if(res){
        return JSON.parse(res)
       }else{
        return []
       }
    }
  const [input, setinput] = useState({
    first: "",
    last: "",
    adress: "",
    number: "",
    gmail: "",
  });

  const [store, setstore] = useState(getvalue());
  console.log(store);
  const change = (e) => {
    const copyinput = { ...input };
    copyinput[e.target.name] = e.target.value;
    setinput(copyinput);
  };

  const put = (e) => {
    console.log("w");
    e.preventDefault();
    const copystore = [...store];
    copystore.push(input);
    setstore(copystore);
    setinput({ first: "", last: "", adress: "", number: "", gmail: "" });
  };

  const deletebtn = (index) => {
    console.log("rb");
    const copydelete = [...store];
    copydelete.splice(index, 1);
    setstore(copydelete);
    // const copy=store.filter((p)=>p.index !==index)
    // setstore(copy)
  };

//   data save
  useEffect(() => {
    localStorage.setItem("any", JSON.stringify(store));
  }, [store]);

  return (
    <div>
      <Grid container style={{ marginTop: "20px", marginLeft: "20px" }}>
        <Grid xs={4}>
          <Card>
            <Typography>Form</Typography>
            <Divider />
            <Box style={{ marginRight: "40px" }}>
              <form onSubmit={(e) => put(e)}>
                <Input
                  placeholder="First name"
                  variant="outlined"
                  color="primary"
                  name="first"
                  value={input.first}
                  style={{ marginBottom: "18px" }}
                  sx={{ width: "280px", marginTop: "10px" }}
                  onChange={change}
                />
                <br />
                <Input
                  placeholder="Last name"
                  variant="outlined"
                  color="primary"
                  style={{ marginBottom: "18px" }}
                  sx={{ width: "280px", marginBottom: "9px" }}
                  name="last"
                  value={input.last}
                  onChange={change}
                />
                <br />
                <Input
                  placeholder="Adress"
                  variant="outlined"
                  color="primary"
                  style={{ marginBottom: "18px" }}
                  sx={{ width: "280px", marginBottom: "9px" }}
                  name="adress"
                  value={input.adress}
                  onChange={change}
                />
                <br />
                <Input
                  placeholder=" Number"
                  variant="outlined"
                  type="number"
                  color="primary"
                  style={{ marginBottom: "18px" }}
                  sx={{ width: "280px", marginBottom: "9px" }}
                  name="number"
                  value={input.number}
                  onChange={change}
                  
                />
                <br />
                <Input
                  placeholder="Gmail"
                  variant="outlined"
                  type="email"
                  required
                  color="primary"
                  style={{ marginBottom: "18px" }}
                  sx={{ width: "280px", marginBottom: "9px" }}
                  name="gmail"
                  value={input.gmail}
                  onChange={change}
                />
                <br />
                <Box style={{ marginBottom: "20px" }}>
                  <Button
                    variant="varient"
                    style={{ color: "white", backgroundColor: "blue" }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Box>
          </Card>
        </Grid>
        <Grid xs={8}>
          <Card>
            <Typography>Data</Typography>
            <Divider />
            <Box>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Sl.No</th>
                    <th>First_Name</th>
                    <th>Last_Name</th>
                    <th>Adress</th>
                    <th>Number</th>
                    <th>Gmail</th>
                  </tr>
                </thead>
                <tbody>
                  {store.map((data, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.first}</td>
                      <td>{data.last}</td>
                      <td>{data.adress}</td>
                      <td>{data.number}</td>
                      <td>{data.gmail}</td>
                      <td>
                        <Button onClick={() => deletebtn(index)}>Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default TableValidation;
