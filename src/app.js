const express = require("express");
const app = express();

const port = 3000;
// 
app.use("/baki", (req, res) =>{
    res.send("Hello from the server");
})
app.use("/k", (req, res) =>{
    res.send("Hello from the home");
})
app.use("/test", (req, res)=>{
    res.send("hello from test");
})
// the arrow funciton inside app.use is request handler

app.listen(port, () =>{
    console.log(`server up and running on port ${port}`);
})
