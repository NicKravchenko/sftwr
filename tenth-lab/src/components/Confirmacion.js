import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";
import { jsPDF } from "jspdf";

const calcularPrecio = (sexo, precio) => {
  return sexo === "F" ? precio * 0.8 : precio;
};

const generateReport = (formData) => {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Confirmación de Registro", 20, 20);

  const lineHeight = 8;
  let currentLine = 40;

  Object.entries(formData).forEach(([key, value]) => {
    if (key === "sexo") {
      value = value === "M" ? "Masculino" : "Femenino";
    }
    doc.text(`${key}: ${value}`, 20, currentLine);
    currentLine += lineHeight;
  });

  doc.save("reporte.pdf");
};

const Confirmacion = () => {
  const navigate = useNavigate();
  const formData = JSON.parse(sessionStorage.getItem("formData"));
  formData.precio = calcularPrecio(formData.sexo, formData.precio);

  const handleEditar = () => {
    navigate("/");
  };

  const handleConfirmar = () => {
    // navigate("/pago", { state: { formData: formData } });
    // handleSubmit(onSubmit)();

    generateReport(formData);
    navigate("/resultado");
  };

  return (
    <div>
      <h2>Confirmación de Registro</h2>
      <p>
        Por favor, revisa la información proporcionada antes de confirmar tu
        registro:
      </p>
      <ul>
        <li>OrderNumber: {formData.OrderNumber}</li>
        <li>Tipo de documento: {formData.tipoDocumento}</li>
        <li>Documento: {formData.documento}</li>
        <li>Nombres: {formData.nombres}</li>
        <li>Apellidos: {formData.apellidos}</li>
        <li>Sexo: {formData.sexo === "M" ? "Masculino" : "Femenino"}</li>
        <li>Fecha de nacimiento: {formData.fechaNacimiento}</li>
        <li>Estado de salud: {formData.estadoSalud}</li>
        <li>Comentario: {formData.comentario}</li>
        <li>Precio: {formData.precio}</li>
      </ul>

      <label htmlFor="imagen">Imagen</label>
      <input
        type="file"
        name="imagen"
        accept="image/*"
      />

      <button onClick={handleEditar}>Editar</button>
      <button onClick={handleConfirmar}>Pagar con transaccion</button>
      <PayPalButton formData={formData} />
    </div>
  );
};

export default Confirmacion;
