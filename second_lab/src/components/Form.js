import React, { useState, useEffect } from "react";

const AmoresApp = () => {
  const [formData, setFormData] = useState({
    cedula: "",
    nombres: "",
    apellidos: "",
    fechaNacimiento: "",
    nivelAcademico: "",
    estadoCivil: "",
    vehiculo: false,
    hobbie: "",
    trabajo: "",
    localidad: "",
    notas: "",
    fotos: [],
  });

  const [allData, setAllData] = useState([{}]);

  useEffect(() => {
    const data = localStorage.getItem("loveApplication");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : type === "file" ? files : value,
    }));
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    let photosArray = [];
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = () => {
        photosArray.push(reader.result);
        setFormData((formData) => ({
          ...formData,
          fotos: photosArray,
        }));
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllData((prevAllData) => [...prevAllData, formData]);
    localStorage.setItem("allData", JSON.stringify(allData));
    setFormData({
      cedula: "",
      nombres: "",
      apellidos: "",
      fechaNacimiento: "",
      nivelAcademico: "",
      estadoCivil: "",
      vehiculo: false,
      hobbie: "",
      trabajo: "",
      localidad: "",
      notas: "",
      fotos: [],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Ejercicio 1: Formulario</h1>
      <div>
        <label>
          Cedula:
          <input
            type="text"
            name="cedula"
            value={formData.cedula}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="">
        <label>
          Nombres:
          <input
            type="text"
            name="nombres"
            value={formData.nombres}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Apellidos:
          <input
            type="text"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Fecha de Nacimiento:
          <input
            type="date"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Nivel Académico:
          <select
            name="nivelAcademico"
            value={formData.nivelAcademico}
            onChange={handleInputChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="Básica">Básica</option>
            <option value="Media">Media</option>
            <option value="Técnico">Técnico</option>
            <option value="Superior">Superior</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Estado Civil:
          <select
            name="estadoCivil"
            value={formData.estadoCivil}
            onChange={handleInputChange}
          >
            <option value="">Seleccione una opción</option>
            <option value="Soltero/a">Soltero/a</option>
            <option value="Casado/a">Casado/a</option>
            <option value="Divorciado/a">Divorciado/a</option>
            <option value="Viudo/a">Viudo/a</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          ¿Tiene vehículo?
          <input
            type="checkbox"
            name="vehiculo"
            checked={formData.vehiculo}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div>
        <label>
          Hobbie:
          <input
            type="text"
            name="hobbie"
            value={formData.hobbie}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Trabajo:
          <input
            type="text"
            name="trabajo"
            value={formData.trabajo}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Localidad:
          <input
            type="text"
            name="localidad"
            value={formData.localidad}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Notas:
          <textarea
            name="notas"
            value={formData.notas}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Fotos:
          <input
            type="file"
            name="fotos"
            onChange={handleFileInputChange}
            multiple
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default AmoresApp;
