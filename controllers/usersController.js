import { response } from "express";
import User from "../model/user.js";
import bcrypt from "bcrypt";

const handleNewUser = async (request, response) => {

  const { email, password, name } = request.body;
  //filed missing
  if (!name || !email || !password) {
    response.status(400).json({ message: "Missing field" });
    return;
  }

  //email duplicate error
  User.findOne({ email: email }).then(async (user) => {
    if (user) {
      response.status(400).json({ message: "Email already exist" });
      return;
    }
    //bad password
    //password needs to be more than 8 characters
     if (password.length < 8) {
      response
        .status(400)
        .json({ message: "Password needs a minimum of  8 characters" });
      return;
    }
    //needs to includes at least one lowercase
    if (!/[A-Z]/.test(password)) {
      response.status(400).json({
        message: "Your password needs at least one uppercase letter.",
      });
      return;
    }
    //needs to includes at least one Uppercase
     if (!/[a-z]/.test(password)) {
      response.status(400).json({
        message: "Your password needs at least one lowercase letter.",
      });
      return;
    }
    //needs to includes at least one digit
    if (!/[0-9]/.test(password)) {
      response
        .status(400)
        .json({ message: "Your password needs at least one number." });
      return;
    }

    const hashPassword = bcrypt.hashSync(
      request.body.password,
      bcrypt.genSaltSync()
    );


    //insert (register) user data into collection "users"

    try { 
      const newUser = await User.create({
        name: name,
        email: email,
        passwordHash: hashPassword,
      })

      request.session.email = newUser.email;
      request.session.name = newUser.name;
      request.session.user = newUser;
      response.json({ message: "New account created success", user: newUser});

    } catch (error) {
      console.log(error)
      response.status(400).json({ Error: "New account created unknown error"});
    };
  });
};

// get all users
const getAllUsers = (request, response) => {
  User.find()
    //.toArray()
    .then((user) => {
      response.json({ users: user });
    });
};


export { getAllUsers, handleNewUser };
