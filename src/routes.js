import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  
import Main from "./pages/main/Main";
import Seasons from "./pages/seasons/Seasons";

const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/seasons" element={<Seasons />} />
    </Routes>
  </BrowserRouter>
  );
};

export default Routers;
