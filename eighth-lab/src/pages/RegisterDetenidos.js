import React, { useState } from "react";
import { API_URL } from './../config';

function RegisterDetenidos( ) {
    const [nombre, setNombre] = useState('');
    const [cargo, setCargo] = useState('');

    const agregarDetenido = (e) => {

      e.preventDefault();
      // Send data to API
      fetch(`${API_URL}/detenidos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, cargo })
      })
      .then(response => response.json())
      .catch(error => {
        console.error('Error:', error);
      });
    };

  return (
    <>
      <h1>Registro de Detenidos - Operación Calamar</h1>
      <form onSubmit={agregarDetenido}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <label>
          Cargo:
          <input
            type="text"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            required
          />
        </label>
        <button type="submit">Agregar Detenido</button>
      </form>
      <h2>Lista de Detenidos</h2>

    </>
  );
}

export default RegisterDetenidos;
