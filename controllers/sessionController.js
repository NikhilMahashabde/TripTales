import bcrypt from "bcrypt";
import User from "../model/user.js";

//this function is a terrible implementation of a controller + middleware... no time.. please have mercy..
const verifyLoggedIn = async (req, res) => {
  if (req.session.email) {
    return res.json({
      isAuthenticated: true,
      email: req.session.email,
      name: req.session.name,
    });
  }

  //ideally all of this should be a seperate end point with a redirect back to home ->
  //this is checking whether there is no session but the presence of a oauth session. if so, login the user and return app session/token
  // or register the user if they do not exist, and then return the app session token.
  if (req.oidc.user) {
    try {
      let user = await User.findOne({ email: req.oidc.user.email });
      if (!user) {
        //typeguard
        try {
          user = await User.create({
            name: req.oidc.user.given_name,
            email: req.oidc.user.email,
            passwordHash: "oauth",
          });
        } catch (error) {
          res.status(400).json({
            message: "Failed to created Oauth account",
          });
        }
      }
      req.session.email = user.email;
      req.session.name = user.name;
      req.session.user = user;
      return res.json({
        message: "Logged in Successfully",
        isAuthenticated: true,
        name: user.name,
        email: user.email,
      });
    } catch {
      return res
        .status(400)
        .json({ message: "Failed to validate Oauth account" });
    }
  }
  return res.status(200).json({ isAuthenticated: false });
};

//Logout
const handleLogout = (req, res) => {
  req.session.destroy();
  if (req.oidc.user) {
    return res.json({
      message: "Logout success",
      isAuthenticated: false,
      oAuth: true,
    });
  }
  return res.json({
    message: "Logout success",
    isAuthenticated: false,
    oAuth: false,
  });
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

      if (user.passwordHash == "oauth")
        return res.status(401).json({
          message:
            "Google & Github Account detected, users must log in with the Sign in links below",
        });
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
