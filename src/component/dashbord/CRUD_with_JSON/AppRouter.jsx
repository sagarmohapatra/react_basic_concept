import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
 
 
} from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import Edit from "./Edit";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/update/:id" element={<Edit/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
