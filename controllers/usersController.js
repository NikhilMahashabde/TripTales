//logout part is in  middleware session.js


const { request } = require('express');
const express=require('express');
const userRouter=express.Router();

const {MongoClient} =require("mongodb")
const mongoClient = new MongoClient(process.env.MONGO_DB_CONNECTION_STRING);


const bcrypt=require('bcrypt');



let userController;

mongoClient.connect()
.then((response)=>{
    //Database name
    const db=mongoClient.db("travelPlanner")
    //collection name
    userController=db.collection("users")

}).catch(error=>{
    console.log("error has occurred")
    console.log(error)
});


//user register controller
userRouter.post("/",(request,response)=>{
    //filed missing
     if(!request.body.name || !request.body.email || !request.body.password){
            response.status(400).json({"message":"missing field"});
        return;
        }
    //email duplicate error
    userController.findOne({email:request.body.email}).then((user)=>{
        if(user){
            response.status(400).json({"message":"email already exist"});
            return;
        }
        //bad password
        //password needs to be more than 8 characters
        if(request.body.password.length < 8 ){
            response.status(400).json({"message":"password needs a minimum of  8 characters"});
            return;
        }
        //needs to includes at least one lowercase
        if (!/[A-Z]/.test(request.body.password)) {
            response.status(400).json({"message": "Your password needs at least one uppercase letter."});
            return;
        }
        //needs to includes at least one Uppercase
        if (!/[a-z]/.test(request.body.password)) {
            response.status(400).json({"message": "Your password needs at least one lowercase letter."});
            return;
        }
        //needs to includes at least one digit
        if (!/[0-9]/.test(request.body.password)) {
            response.status(400).json({"message": "Your password needs at least one number."});
            return;
        }
        console.log(request.body.password)
        const hashPassword=bcrypt.hashSync(request.body.password,bcrypt.genSaltSync());
        console.log(hashPassword)
//insert (register) user data into collection "user"
        userController.insertOne({
            name:request.body.name,
            email:request.body.email,
            password:hashPassword
        }).then(()=>{
            response.json({message:"success"})
        })
    })


})


//login
userRouter.get("/",(request,response)=>{
    userController.find().toArray().then((user)=>{
        response.json({users:user})
    })
})



module.exports = userRouter;