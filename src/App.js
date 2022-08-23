import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";

import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import { useState } from "react";
import ProtectedComponents from "./Context/ProtectedComponents";
import Login from "./page/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContext>
          <Routes>
            <Route index element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route element={<ProtectedComponents />}>
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </AppContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
