import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </>
  );
}

export default App;
