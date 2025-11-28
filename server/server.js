import express from "express";
import dotenv from "dotenv";

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
