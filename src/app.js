const express = require("express");
const app = express();
const PORT = 7777;

app.get("/getUserData", (req, res, next)=>{
   throw new Error();
})
app.use("/", (err, req, res, next)=>{
    if(err){
        res.send("something went wrong");
    }else{
        res.send("all good");
    }
})
app.listen(PORT, ()=>{
    console.log(`server up and running on ${PORT}` );
})
