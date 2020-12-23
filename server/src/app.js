import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 3000;

app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("root");
});

app.listen(PORT, () => {
  console.log("server started");
});
