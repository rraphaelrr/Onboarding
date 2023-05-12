import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

/* Register */
import Register from "../pages/register/register";

const Rotas = () => {
  const url = window.location.href;
  const parts = url.split("/");
  const valor = parts.pop();
  console.log(url);
  console.log(parts);
  console.log(valor);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/?" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
