import React, { useState } from 'react';
import './App.css';

function App() {
  const [detenidos, setDetenidos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [cargo, setCargo] = useState('');

  const agregarDetenido = (e) => {
    e.preventDefault();

    setDetenidos([...detenidos, { nombre, cargo }]);
    setNombre('');
    setCargo('');
  };

  return (
    <div className="App">
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
      <ul>
        {detenidos.map((detenido, index) => (
          <li key={index}>
            {detenido.nombre} - {detenido.cargo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
