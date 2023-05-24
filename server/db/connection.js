const mongoose = require("mongoose");

const DB =
  "mongodb+srv://vivek2003ji:6EtUOlTcMzKsePqZ@cluster0.omhfpli.mongodb.net/ecommerce?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection sucessfully to the database.");
  })
  .catch((err) => {
    console.log(err);
  });
