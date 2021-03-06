const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  lastname: {
    type: String,
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model("users", usersSchema);
