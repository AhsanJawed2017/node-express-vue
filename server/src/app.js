import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 3000;

app.use(morgan("combine"));
app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res) => {
  res.send(`User ${req.body.username} registered successfully.`);
});

app.listen(PORT, () => {
  console.log("server started");
});
