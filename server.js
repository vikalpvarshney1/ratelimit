const express = require("express")
const ratelimit = require("express-rate-limit")
const app = express();
const port = 8000;
const limit = ratelimit({
    window: 1000,
    max: 1,
    message: ":)"
})
app.get('/',limit,(req,res)=> res.send("hello world"));
app.listen(port,()=>console.log("isten port"));