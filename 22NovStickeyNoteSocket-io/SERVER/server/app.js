const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: { origin: true },
});

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("data", (data) => {
    socket.broadcast.emit("data", data);
  });
});

console.log("started");

const port = process.env.PORT || 5000;
server.listen(port);
