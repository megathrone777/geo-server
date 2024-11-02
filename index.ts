import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const PORT = 80;
const app = express();

app.use(cors());
app.use(express.static("public"));

app.get("/", (_, res) => {
  res.send("Hello World!");
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("sendLocation", (data) => {
    console.log("Received location:", data);
    io.emit("changeLocation", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
