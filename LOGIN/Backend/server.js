const express = require('express')
const app = express();
const bcrypt = require('bcrypt')

const user = [];
// app.set("views")
app.set("view engine","ejs")

app.use(express.urlencoded({extended:false}))


app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/login", (req,res)=>{
    res.render("login")
})

app.get("/signup", (req,res)=>{
    res.render("signup")
})

app.post("/signup", async (req,res)=>{

    try{
        // const hashPassword = await bcrypt.hash(req.body.password,10)
        user.push({
            id: Date.now().toString(),
            // name : req.body.name,
            email : req.body.email,
            // password : hashPassword,.
            password : req.body.password,
        })
        res.redirect('/login')
    }
    catch{
        res.redirect('/signup')
    }
    console.log(user)
})

app.post("/hi", (req,res)=>{
    console.log("connected react");
    res.redirect("/")
})

app.listen(8080, ()=>{
    console.log(`Listening on port 8080`)
})

// console.log(user)
