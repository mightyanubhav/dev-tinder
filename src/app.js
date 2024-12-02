const express = require("express");
const app = express();
const PORT = 7777;

app.get("/user", (req, res)=>{
    console.log(req.query);
    res.send({firstName: "anubhav", lastName: "shukla"});
})

app.listen(PORT, ()=>{
    console.log(`server up and running on ${PORT}` );
})
