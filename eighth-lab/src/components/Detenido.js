import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_URL } from "../config";

function Detenido(props) {
  const [detenido, setDetenido] = useState(null);
  const { id } = useParams();

  const obtenerDetenidos = async () => {
    const response = await fetch(`${API_URL}/detenidos`);
    const data = await response.json();
    const detenidoEncontrado = data.find((detenido) => detenido._id === id);
    setDetenido(detenidoEncontrado);
  };

  useEffect(() => {
    obtenerDetenidos();
  }, []);

  return (
    <div>
      {detenido ? (
        <div>
          <h2>{detenido.nombre}</h2>
          <p>Cargo: {detenido.cargo}</p>
          <p>Edad: {detenido.edad}</p>
        </div>
      ) : (
        <div>Detenido no encontrado</div>
      )}
    </div>
  );
}

export default Detenido;
