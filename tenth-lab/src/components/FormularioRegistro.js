import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormularioRegistro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [precio, setPrecio] = useState(100);
  const navigate = useNavigate();
  const [descuento, setDescuento] = useState(false);

  const onSubmit = (data) => {
    sessionStorage.setItem("formData", JSON.stringify(data));
    navigate("/confirmacion");
  };

  const handleDescuento = (e) => {
    if (e.target.value === "F") {
      setDescuento(true);
    } else {
      setDescuento(false);
    }
  };



  const calcularPrecio = (descuento) => {
    const precio = 100;
    return descuento ? precio * 0.8 : precio;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="tipoDocumento">Tipo de documento:</label>
      <select
        name="tipoDocumento"
        {...register("tipoDocumento", { required: true })}
      >
        <option value="">Seleccionar</option>
        <option value="cedula">Cédula</option>
        <option value="pasaporte">Pasaporte</option>
      </select>
      {errors.tipoDocumento && <span>Este campo es requerido</span>}

      <br />
        <input type="hidden" {...register("OrderNumber")} value={"aaa"} />
      <label htmlFor="documento">Documento:</label>
      <input
        name="documento"
        type="text"
        {...register("documento", { required: true })}
      />
      {errors.documento && <span>Este campo es requerido</span>}

      <br />

      <label htmlFor="nombres">Nombres:</label>
      <input
        name="nombres"
        type="text"
        {...register("nombres", { required: true })}
      />
      {errors.nombres && <span>Este campo es requerido</span>}

      <br />

      <label htmlFor="apellidos">Apellidos:</label>
      <input
        name="apellidos"
        type="text"
        {...register("apellidos", { required: true })}
      />
      {errors.apellidos && <span>Este campo es requerido</span>}

      <br />

      <label htmlFor="sexo">Sexo:</label>
      <select
        name="sexo"
        {...register("sexo", { required: true })}
        onChange={handleDescuento}
      >
        <option value="">Seleccionar</option>
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
      </select>
      {errors.sexo && <span>Este campo es requerido</span>}

      <br />

      <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
      <input
        name="fechaNacimiento"
        type="date"
        {...register("fechaNacimiento", { required: true })}
      />
      {errors.fechaNacimiento && <span>Este campo es requerido</span>}

      <br />

      <label htmlFor="estadoSalud">Estado de salud:</label>
      <select
        name="estadoSalud"
        {...register("estadoSalud", { required: true })}
      >
        <option value="">Seleccionar</option>
        <option value="excelente">Excelente</option>
        <option value="bueno">Bueno</option>
        <option value="regular">Regular</option>
        <option value="malo">Malo</option>
      </select>
      {errors.estadoSalud && <span>Este campo es requerido</span>}

      <br />

      <label htmlFor="comentario">Comentario:</label>
      <textarea name="comentario" {...register("comentario")}></textarea>

      <br />

      <label htmlFor="precio">Precio:</label>
      <input
        name="precio"
        type="text"
        {...register("precio", { required: true })}

      />

      <br />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioRegistro;
