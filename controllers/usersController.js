//login
//register
//logout
// get all users

const User = require("../model/user");

const handleNewUser = {
  //misa's code
};

const getAllUsers = async (req, res) => {
  //find and return all users

  // const newUser = {
  // //   name: "nikil2",
  // //   email: "hi@gmail",
  // //   passwordHash: "test12344",
  // // };

  // await User.create(newUser);
  const foundUsers = await User.find();

  console.log(foundUsers);
  res.json(foundUsers);
};

module.exports = { getAllUsers, handleNewUser };
