export {};
const mongoose = require("mongoose");
const express = require("express");

require("../config/env");

const app = express();
const port = 5000;

// Bodyparser Middleware
app.use(express.json());

// DB Config
const db = process.env.MONGO_DB_URI;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
  }) // Adding new mongo url parser
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/cards", require("./routes/cards"));

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
