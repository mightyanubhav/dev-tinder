const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const PORT = 7777;

app.post("/signup", async(req, res) =>{
    // creating a new data instance for the database;
    const user = new User({
        firstName : "Anubhav", 
        lastName : "Shukla",
        emailId : "kumaranubhav691@gmail.com",
        password : "gmailID", 
    });
    await user.save();
    res.send("user added successfully now");
})


// first databse is connected, then server must be started then start my app, start listening to api calls.

connectDB()
  .then(() => {
    console.log("db connected successfully");

    app.listen(PORT, () => {
      console.log(`server up and running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("there is an error");
  });
