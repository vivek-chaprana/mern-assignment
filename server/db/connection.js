const mongoose = require("mongoose");

//MongoDB url
const DB =
  "mongodb+srv://vivek2003ji:6EtUOlTcMzKsePqZ@cluster0.omhfpli.mongodb.net/ecommerce?retryWrites=true&w=majority";

//Connecting to the database
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
