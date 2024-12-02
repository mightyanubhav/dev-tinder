const express = require("express");
const app = express();
const PORT = 7777;

app.get("/user", (req, res)=>{
    res.send({firstName: "anubhav", lastName: "shukla"});
})
app.post("/user", (req, res)=>{
    //savign data to data base
    res.send("data is saved to the database");
})
app.delete("/user", (req, res)=>{
    //data deleted from database.
    res.send("data is deleted from the database");
})
// when we use app.use it gives response to all http request , to avoid we use different like , get, post etc.

// app.use("/result/test", (req, res)=>{
//     res.send("result test");
// })

app.listen(PORT, ()=>{
    console.log(`server up and running on ${PORT}` );
})