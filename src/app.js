const express = require("express");
require("./config/database");
const app = express();
const PORT = 7777;

app.use("/user", (req, res) =>{
    res.send("Identified user");
})

app.listen(PORT, ()=>{
    console.log(`server up and running on ${PORT}` );
})
