import bcrypt from "bcrypt";
import User from "../model/user.js";

const verifyLoggedIn = (req, res) => {
  console.log("router erifylogin: ", req.session);
  if (req.session.email) {
    res.json({
      message: "user successfully Verified logged in",
      user: req.session.user,
    });
  } else {
    res.status(401).json({ message: "user is not logged in" });
    return;
  }
};

//Logout
const handleLogout = (req, res) => {
  req.session.destroy();
  res.json({ message: "Logout success" });
};

//login
const handleLogin = (req, res) => {
  console.log("req.body on login:", req.body);
  const { email, password } = req.body;

  console.log("check user login ID :", req.sessionID);

  //filed missing
  if (!email || !password) {
    res.status(400).json({ message: "Missing Email or Password" });
    return;
  }

  User.findOne({ email: email }).then((user) => {
    if (user) {
      //compare input password and existing password match
      const isValidPassword = bcrypt.compareSync(password, user.passwordHash);

      //if it matched
      if (isValidPassword) {
        req.session.email = email;
        req.session.user = user;
        res.json({
          message: "Logged in Successfully",
          name: user.name,
          email: user.email,
        });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    } else {
      res.status(401).json({ message: "User could not be found" });
    }
  });
};

export { handleLogin, handleLogout, verifyLoggedIn };
