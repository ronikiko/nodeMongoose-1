const mongoose = require("mongoose");
const DB_CONNECT = require('./conf')
const connectToDB = () => {
  // connect to database
  mongoose.connect(DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
};

module.exports = connectToDB;
