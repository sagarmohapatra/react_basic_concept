import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
 
 
} from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add" element={<Add/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
