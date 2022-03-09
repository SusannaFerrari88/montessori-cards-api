import mongoose from "mongoose";
import express from "express";
import { ConnectOptions } from "mongodb";
import cors from "cors";

import CardsRoutes from "./routes/cards";
import ImagesRoutes from "./routes/images";

if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv"); // eslint-disable-line
  dotenv.config();
}

const app = express();
const port = 5000;

// Bodyparser Middleware
app.use(express.json());

app.use(cors());

// DB Config
const db = process.env.MONGO_DB_URI || "";

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
  } as ConnectOptions) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api/cards", CardsRoutes);
app.use("/api/images", ImagesRoutes);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
