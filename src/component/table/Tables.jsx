import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Container,
  Divider,
  
  TextField,
  Button,
} from "@mui/material";

const Tables = () => {
  const [input, setinput] = useState({
    first: "",
    second: "",
    number: "",
    mail: "",
    qulification: "",
  });
  console.log(input);
  const [store, setstore] = useState([]);
  console.log("store:-",store);
  const change = (e) => {
    const copyinput = { ...input };
    copyinput[e.target.name] = e.target.value;
    setinput(copyinput);
  };

  const submit = (e) => {
    console.log("fghj");
    e.preventDefault();
    const copystore=[...store]
    copystore.push(input)
    setstore(copystore)
  };
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container style={{ marginTop: "20px" }}>
          <Grid xs={4}>
            <Card>
              <Typography>Form</Typography>
              <Divider />
              <Box style={{ marginRight: "40px" }}>
                <form onSubmit={submit}>
                  <TextField
                    id="standard-basic"
                    label="First name"
                    variant="standard"
                    name="first"
                    value={input.first}
                    onChange={change}
                    sx={{ width: "280px", marginBottom: "7px" }}
                  />
                  <br />
                  <TextField
                    id="standard-basic"
                    label=" last name"
                    variant="standard"
                    name="second"
                    value={input.second}
                    onChange={change}
                    sx={{ width: "280px", marginBottom: "7px" }}
                  />
                  <br />
                  <TextField
                    id="standard-basic"
                    label="Phone"
                    variant="standard"
                    name="number"
                    value={input.number}
                    onChange={change}
                    sx={{ width: "280px", marginBottom: "7px" }}
                  />
                  <br />
                  <TextField
                    id="standard-basic"
                    label="Gmail"
                    variant="standard"
                    name="mail"
                    value={input.mail}
                    onChange={change}
                    sx={{ width: "280px", marginBottom: "7px" }}
                  />
                  <br />
                  <TextField
                    id="standard-basic"
                    label="Qualification"
                    variant="standard"
                    name="qulification"
                    value={input.qulification}
                    onChange={change}
                    sx={{ width: "280px", marginBottom: "15px" }}
                  />
                  <Box style={{ marginBottom: "20px" }}>
                    <Button
                      variant="contained"
                      style={{ textTransform: "none" }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Box>
                </form>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Tables;
