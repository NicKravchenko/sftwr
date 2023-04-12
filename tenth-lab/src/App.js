import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FormularioRegistro from "./components/FormularioRegistro";
import Confirmacion from "./components/Confirmacion";
import Resultado from "./components/Resultado";
import Pago from "./components/Pago";
import Reporte from "./components/Reporte";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormularioRegistro />} />
        <Route path="/confirmacion" element={<Confirmacion />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/reporte" element={<Reporte />} />
      </Routes>
    </Router>
  );
}

export default App;
