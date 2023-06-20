const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  passwordHash: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
