const adminAuth = (req, res, next) =>{
    // authorization check,
    console.log("admin - middle ware");

    const token = "xyz";
    const authorised = token === "xyz";
    if(authorised){
        next();
    }else{
        res.status(401).send("the user is not authorized");
    }
}
const userAuth = (req, res, next) =>{
    // authorization check,
    console.log("user - middle ware");

    const token = "xyz";
    const authorised = token === "xyz";
    if(authorised){
        next();
    }else{
        res.status(401).send("the user is not authorized");
    }
}

module.exports =  {
    adminAuth,
    userAuth, 
}