const express = require("express");
const mongoose = require("mongoose");

const app = express();

const cors = require("cors");

app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

app.use(express.json()); // Parse incoming requests with JSON payloads

const routes = require("./routes/productRoutes");

app.use("/api", routes); // Mount routes at the "/api" endpoint

const port = process.env.PORT || 5000; // Set the server port

require("./db/connection"); // Connect to the MongoDB database using Mongoose

app.get("/", (req, res) => {
  res.status(200).send("Hello Fraands"); // Route for the root URL
});

app.listen(port, () => {
  console.log(`Server Started at ${port}\nhttp://localhost:${port}`); // Start the server and listen on the specified port
});
