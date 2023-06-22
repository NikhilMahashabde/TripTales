const User = require("../model/user");

const handleNewUser =(request,response)=> {

    const { email, password, name, confirmPassword} = request.body;
    //filed missing
     if(!name || !email || !password){
            response.status(400).json({"message":"missing field"});
        return;
        }
    //email duplicate error
    User.findOne({email:email}).then((user)=>{
        if(user){
            response.status(400).json({"message":"email already exist"});
            return;
        }
        //bad password
        //password needs to be more than 8 characters
        if(password.length < 8 ){
            response.status(400).json({"message":"password needs a minimum of  8 characters"});
            return;
        }
        //needs to includes at least one lowercase
        if (!/[A-Z]/.test(password)) {
            response.status(400).json({"message": "Your password needs at least one uppercase letter."});
            return;
        }
        //needs to includes at least one Uppercase
        if (!/[a-z]/.test(password)) {
            response.status(400).json({"message": "Your password needs at least one lowercase letter."});
            return;
        }
        //needs to includes at least one digit
        if (!/[0-9]/.test(password)) {
            response.status(400).json({"message": "Your password needs at least one number."});
            return;
        }
        console.log(password)
        //create has password
        const hashPassword=bcrypt.hashSync(request.body.password,bcrypt.genSaltSync());
        console.log(hashPassword)


//insert (register) user data into collection "users"
        User.create({
            name:request.body.name,
            email:request.body.email,
            password:hashPassword
        }).then(()=>{
            response.json({message:"success"})
        })
    })


}

// get all users
const getAllUsers=(request,response)=>{
  User.find().toArray().then((user)=>{
    response.json({users:user})
})
};



// const getAllUsers = async (req, res) => {
//   //find and return all users

//   // const newUser = {
//   // //   name: "nikil2",
//   // //   email: "hi@gmail",
//   // //   passwordHash: "test12344",
//   // // };

//   // await User.create(newUser);
//   const foundUsers = await User.find();

//   console.log(foundUsers);
//   res.json(foundUsers);
// };

module.exports = { getAllUsers, handleNewUser };
