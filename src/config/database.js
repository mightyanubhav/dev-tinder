// we use mongoose , it is a descent way, it is amazing.
const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect(
        "mongodb+srv://anubhav_shukla:anubhav_shukla@node-practice.wqf4p.mongodb.net/devTinder"
    )
}

module.exports = connectDB;