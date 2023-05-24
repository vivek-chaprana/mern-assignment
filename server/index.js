const express = require("express");
const mongoose = require("mongoose");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

const routes = require("./routes/productRoutes");

app.use("/api", routes);

const port = process.env.PORT || 5000;

require("./db/connection");

app.get("/", (req, res) => {
  res.status(200).send("Hello Fraands");
});

app.listen(port, () => {
  console.log(`Server Started at ${port}\nhttp://localhost:${port}`);
});
