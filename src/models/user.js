// what fields user collection has.
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
      type: String, // Use `type` instead of `typeof`
    },
    lastName: {
      type: String,
    },
    emailId: { // Note: The key is `emailId`, not `emailID` (case-sensitive)
      type: String,
    },
    password: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
  });
  
// after definging schema, thenmake mongoose model : 

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;