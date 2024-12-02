const express = require("express");
const app = express();
const PORT = 7777;

app.use("/user", (req, res, next)=>{

    console.log("first handler");
    // next();
    res.send("first response sent");

})

app.listen(PORT, ()=>{
    console.log(`server up and running on ${PORT}` );
})
