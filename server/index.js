const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const User=require('./models/userModel')
require('./db')
const app=express();

const dotenv = require('dotenv')
dotenv.config();
const productRoute=require('./routes/Router')
const userRoute=require('./routes/userRouter')
 
var corsOptions={
    origin:"https://localhost:3000"
}

app.use(cors())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// db.on('error', console.error.bind(console,'Mongodb  connection error: '))

app.get("/",(req,res)=>{
    res.json({message: "Welcome to BrrGrr"})
})

const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/', productRoute)
app.use('/api/', userRoute)

app.post('/api/register', async(req,res)=>{
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({status: 'ok'})
    } catch (error) {
        res.json({status: 'error',error: 'duplicate email'})
        
    }
    res.json({status: 'ok'})
})

app.post('/api/login', async(req,res)=>{
    const user=await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })
    if(user){   
        const token=jwt.sign({
            name: user.name,
            email: user.email
        }, 'secret123')
    return  res.json({status: 'ok', user: 'true'})
    }
    else{
       return res.json({status: 'error', user: 'false'})
    }
   
})
