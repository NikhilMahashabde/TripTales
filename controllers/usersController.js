import { response } from "express";
import User from "../model/user.js";
import bcrypt from "bcrypt";

const handleNewUser = (request, response) => {
  console.log("request.body:", request.body);
  const { email, password, name } = request.body;
  //filed missing
  if (!name || !email || !password) {
    response.status(400).json({ message: "Missing field" });
    return;
  }

  //email duplicate error
  User.findOne({ email: email }).then((user) => {
    if (user) {
      response.status(400).json({ message: "Email already exist" });
      return;
    }
    //bad password
    //password needs to be more than 8 characters
    else if (password.length < 8) {
      response
        .status(400)
        .json({ message: "Password needs a minimum of  8 characters" });
      return;
    }
    //needs to includes at least one lowercase
    else if (!/[A-Z]/.test(password)) {
      response.status(400).json({
        message: "Your password needs at least one uppercase letter.",
      });
      return;
    }
    //needs to includes at least one Uppercase
    else if (!/[a-z]/.test(password)) {
      response.status(400).json({
        message: "Your password needs at least one lowercase letter.",
      });
      return;
    }
    //needs to includes at least one digit
    else if (!/[0-9]/.test(password)) {
      response
        .status(400)
        .json({ message: "Your password needs at least one number." });
      return;
    }
    console.log(password);
    //create has password
    const hashPassword = bcrypt.hashSync(
      request.body.password,
      bcrypt.genSaltSync()
    );
    console.log(hashPassword);

    //insert (register) user data into collection "users"
    User.create({
      name: name,
      email: email,
      passwordHash: hashPassword,
    }).then(() => {
      response.json({ message: "New account created success" });
    });
  });
};

// get all users
const getAllUsers = (request, response) => {
  User.find()
    .toArray()
    .then((user) => {
      response.json({ users: user });
    });
};

const handleNewOauthUser = (req, response) => {};
export { getAllUsers, handleNewUser };
