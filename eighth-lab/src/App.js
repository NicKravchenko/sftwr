import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import RegisterDetenidos from "./pages/RegisterDetenidos";
import ReportDetenidos from "./pages/ReportDetenidos";
import DetenidosList from "./pages/DetenidosList";
import Header from "./components/Header";
import Detenido from "./components/Detenido";
import InscriptionForm  from "./pages/InscriptionForm";

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/detenidos" element={<RegisterDetenidos/>} />
        <Route path="/report" element={<ReportDetenidos/>} />
        <Route path="/intec" element={<InscriptionForm />} />
        <Route path="/list/*" element={<DetenidosList/>} />
        <Route path="/list/:id" element={<Detenido/>}/>

      </Routes>
      </div>
    </Router>
  );
}

export default App;
