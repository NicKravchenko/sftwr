import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function UserCounter() {
  const [numberOfUsers, setUsers] = useState(0);

  useEffect(() => {
    socket.on("usuariosConectados", ({ numberOfUsers }) => {
      setUsers(numberOfUsers);
    });

    return () => {
      socket.off("usuariosConectados");
    };
  }, [numberOfUsers]);

  return (
    <div>
      <h1 style={{ marginTop: "10rem" }}>Exercise 2</h1>
      <h2>Contected users: {numberOfUsers - 1}</h2>
    </div>
  );
}

export default UserCounter;
