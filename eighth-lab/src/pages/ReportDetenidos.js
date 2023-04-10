import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { API_URL } from "../config";

function ReportDetenidos() {
  const [detenidos, setDetenidos] = useState([]);

  // Función para obtener los detenidos desde la API
  const obtenerDetenidos = async () => {
    console.log(API_URL);

    const response = await fetch(`${API_URL}/detenidos`);
    const data = await response.json();

    setDetenidos(data);
  };

    // Función para generar el PDF y descargarlo
    const exportarPDF = () => {
      const input = document.getElementById('tabla-detenidos');
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('detenidos.pdf');
      });
    };
  useEffect(() => {
    obtenerDetenidos();
  }, []);

  return (
    <div>
      <h1>Lista de Detenidos</h1>
      <Button variant="primary" onClick={exportarPDF}>Exportar a PDF</Button>
      <Table id="tabla-detenidos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cargo</th>
          </tr>
        </thead>
        <tbody>
          {detenidos.map((detenido) => (
            <tr key={detenido._id}>
              <td>{detenido.nombre}</td>
              <td>{detenido.cargo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ReportDetenidos;
