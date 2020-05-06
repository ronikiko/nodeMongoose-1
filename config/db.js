const mongoose = require("mongoose");
const { CONNECTION_DB } = require('./conf')
const connectToDB = () => {
  // connect to database
  mongoose.connect(CONNECTION_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
};

module.exports = connectToDB;
