import express from "express";
import connectDB from "./db.js";
// import cors from "cors";

const app = express();

app.use(express.json());
// app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({ message: "API Running Successfully" });
});

app.listen(5500, () => {
  console.log("App running on port 5500");
});
