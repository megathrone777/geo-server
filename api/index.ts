import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
// app.use(express.static("public"));

app.get("/", (_, res) => {
  res.send("<h1>Server running</h1>");
});

export default app;
