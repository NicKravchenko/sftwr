import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import RegisterDetenidos from "./pages/RegisterDetenidos";
import ReportDetenidos from "./pages/ReportDetenidos";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/detenidos" element={<RegisterDetenidos/>} />
        <Route path="/report" element={<ReportDetenidos/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
