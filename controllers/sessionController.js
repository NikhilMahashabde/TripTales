const User = require("../model/user");

const verifyLoggedIn=(request, response) =>  {
    if (request.session.email) {
      response.json({"message":"user successfully logged in"})
    } 
    else {
      response.status(401).json({"message":"user is not logged in"})
      return;
    }
  }

//Logout 
const handleLogout =(request, response) => {
      request.session.destroy();
      response.json({ message: "Logout success" })
};


//login
const handleLogin  = (request, response) => {
    const { email, password } = request.body;
    //filed missing
    if(!email || !password){
            response.status(400).json({"message":"missing field"});
        return;
    }

    User.findOne({email:email})
    .then((user)=>{ 
        if(user){
            //compare input password and existing password match
            const isValidPassword = bcrypt.compareSync(password, user.password);
            console.log(`password : ${isValidPassword}`)
       
            //if it matched
            if(isValidPassword){
                request.session.email = email;
                response.json({ "message": 'logged in successfully', "name": user.name });
            } else {
                response.status(401).json({ message: "Incorrect password or username" });
              }
            } else {
              response.status(401).json({ message: "Incorrect password or username" });
            }
          })
  }
module.exports = { handleLogin, handleLogout,verifyLoggedIn};







