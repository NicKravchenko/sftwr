import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function ServidorInfo() {
  const [navegador, setNavegador] = useState("");
  const [sistemaOperativo, setSistemaOperativo] = useState("");

  useEffect(() => {
    socket.on("variablesServidor", ({ navegador, sistemaOperativo }) => {
      setNavegador(navegador);
      setSistemaOperativo(sistemaOperativo);
    });
  }, []);

  return (
    <div>
      <h1 style={{ marginTop: "12rem" }}>Exercise 3: </h1>
      <p>Browser: {navegador}</p>
      <p>OS: {sistemaOperativo}</p>
    </div>
  );
}

export default ServidorInfo;
