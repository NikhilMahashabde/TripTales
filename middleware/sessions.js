const { Router } = require("express");
const express=require('express')
const sessionRouter=express.Router();

const {MongoClient} =require("mongodb")
const mongoClient = new MongoClient(process.env.MONGO_DB_CONNECTION_STRING);

const bcrypt=require('bcrypt');

let sessionController;

//connect to user collection DB
mongoClient.connect()
.then((response)=>{
    const db=mongoClient.db("travelPlanner")
    sessionController=db.collection("users")

}).catch(error=>{
    console.log("error has occurred")
    console.log(error)
});



  // call this to check if user can access restricted resources
  sessionRouter.get("/", (request, response) => {
    //someone already logged in 
    if (request.session.email) {
        response.json({"message":"user successfully logged in"})
    } 
    //no one logged in
    else {
      response.status(401).json({"message":"user is not logged in"})
      return;
    }
  });


// call this when logging in user
sessionRouter.post("/", (request, response) => {
   
    const { email, password, name } = request.body;

    //filed missing
    if(!request.body.email || !request.body.password){
            response.status(400).json({"message":"missing field"});
        return;
    }

    sessionController.findOne({email})
    .then((user)=>{ 
        if(user){
            //compare input password and existing password match
            const isValidPassword = bcrypt.compareSync(password, user.password);
            console.log(`password : ${isValidPassword}`)
       
            //if it matched
            if(isValidPassword){
                request.session.name = name;
                request.session.email = email;
                response.json({ "message": 'logged in successfully', "name": user.name });
                return ;
            } else {
                response.status(401).json({ message: "Incorrect password or username" });
              }
            } else {
              response.status(401).json({ message: "Incorrect password or username" });
            }
          })
  })
  

  // call this user logout.
  sessionRouter.delete("/", (request, response) => {
    request.session.destroy();
    response.json({ message: "logout success" });
  });
  

  module.exports=sessionRouter