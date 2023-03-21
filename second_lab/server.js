const io = require("socket.io")(3001);
const useragent = require("useragent");

let numberOfUsers = 0;

io.on("connection", (socket) => {
  numberOfUsers++;
  // numberOfUsers = numberOfUsers / 2;
  enviarVariables(socket);
  io.emit("usuariosConectados", { numberOfUsers });

  socket.on("disconnect", () => {
    numberOfUsers--;
    io.emit("usuariosConectados", { numberOfUsers });
  });
});

function enviarVariables(socket) {
  const agenteUsuario = useragent.parse(socket.request.headers["user-agent"]);
  const navegador = agenteUsuario.toAgent();
  const sistemaOperativo = agenteUsuario.os.toString();

  const variables = {
    navegador,
    sistemaOperativo,
    // Agrega aquí cualquier otra variable que quieras enviar al cliente
  };

  socket.emit("variablesServidor", variables);
}
