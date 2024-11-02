import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.set("view engine", "jade");
// app.use(express.static("public"));

app.get("/", (_, res) => {
  res.render("index.jade");
});

// app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;
