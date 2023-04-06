import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

import Detenido from "../components/Detenido";
import { API_URL } from "../config";

function DetenidosList() {
  const [detenidos, setDetenidos] = useState([]);

  // Función para obtener los detenidos desde la API
  const obtenerDetenidos = async () => {
    const response = await fetch(`${API_URL}/detenidos`);
    const data = await response.json();
    setDetenidos(data);
  };

  // Llamada a la función para obtener los detenidos cuando el componente se monta
  useEffect(() => {
    obtenerDetenidos();
  }, []);

  return (
    <div>
      <h1>Lista de Detenidos</h1>
      <ul>
        {detenidos.map((detenido) => (
          <li key={detenido._id}>
            <Link
              to={{
                pathname: `/list/${detenido._id}`,
                state: { detenido },
              }}
            >
              {detenido.nombre} - {detenido.cargo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetenidosList;
