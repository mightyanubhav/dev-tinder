const express = require("express");
const app = express();
const PORT = 7777;
const { adminAuth, userAuth } = require("./middlewares/auth");
// app.use("/admin", adminAuth);
// app.use("/user", userAuth);

app.get("/admin/getAllData",adminAuth, (req, res)=>{
    res.send({"firstName" : "Anubhav", "secondName" : "Shukla"})
})
app.get("/admin/deleteAllData", (req, res)=>{
    res.send("all data deleted");
})

app.use("/user/allData", userAuth, (req, res) =>{
    res.send("all user Data");
})


app.listen(PORT, ()=>{
    console.log(`server up and running on ${PORT}` );
})
