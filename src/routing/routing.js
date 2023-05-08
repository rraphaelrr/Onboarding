import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

/* Register */
import Register from "../pages/register/register";

const Rotas = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
