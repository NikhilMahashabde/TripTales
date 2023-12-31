import mongoose from "mongoose";

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

//Converting from commonJS to ESM
const userModel = mongoose.model("User", userSchema);

export default userModel;
