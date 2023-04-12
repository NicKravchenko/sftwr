import React from "react";

const Reporte = ({ formData }) => {
  const {
    OrderNumber,
    FirstName,
    LastName,
    strDireccion,
    TotalPayment,
  } = formData;

  return (
    <div>
      <h1>Comprobante de Pago</h1>
      <p>Orden en SuperPlazas.com</p>
      <p>Número de pedido: {OrderNumber}</p>
      <p>
        Cliente: {FirstName} {LastName}
      </p>
      <p>Dirección: {strDireccion}</p>
      <p>Monto pagado: ${parseFloat(TotalPayment).toFixed(2)} USD</p>
    </div>
  );
};

export default Reporte;
