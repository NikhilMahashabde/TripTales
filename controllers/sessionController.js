import bcrypt from "bcrypt";
import User from "../model/user.js";

const verifyLoggedIn = (req, res) => {
  if (req.session.email) {
    res.json({
      isAuthenticated: true,
      email: req.session.email,
      name: req.session.name,
    });

    //check req.oidc.user
  } else {
    res.status(200).json({ isAuthenticated: false });
    return;
  }
};

//Logout
const handleLogout = (req, res) => {
  req.session.destroy();
  res.json({ message: "Logout success", isAuthenticated: false });
};

//login
const handleLogin = (req, res) => {
  const { email, password } = req.body;

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
        req.session.name = user.name;
        req.session.user = user;
        res.json({
          message: "Logged in Successfully",
          isAuthenticated: true,
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
