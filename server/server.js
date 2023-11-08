import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000; // Define the port your server will listen on

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
connectDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
