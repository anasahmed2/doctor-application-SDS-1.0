import express from "express"
import router from "./routes/index.js";
import mongoose from "./DB/index.js";
import cors from "cors"
import chalk from "chalk";
import "dotenv/config"
import { Server } from "socket.io";
import { createServer } from "http";

const app = express()
const port = process.env.PORT || 5000;


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function () {
    console.log(chalk.bgGreen("db connected!"))
})


app.use(express.json())
app.use(cors())
app.use("/api", router)
// important thing is insert the status in your code is the best parctice for creating api and

const httpServer = createServer(app)
const io = new Server(httpServer, {cors:'*'});

io.on("connection", (socket) => {
    console.log("made socket connection",socket.id)
    socket.on("addTodo",(data)=>{
        console.log(data)
        io.emit("sendTodo",data )
    })
});


const server = httpServer.listen(port, () => {
    console.log(chalk.white(`server is running on port : ${port}`))
})

// app.use("/",(req,res,next)=>{
//     console.log("agi request....",req.query)
//     if(req?.query?.apiKey
//         === "123"){
//         next()
//     }else{
//         res.status(401).send({status:401,Message:"not allowed"})
//     }

// })






//  app.use(cors())


// app.use(express.json())

// app.get("/user", (req, res) => {
//     res.send(user)

// })

// app.post("/user", (req, res) => {

//     const { name, email } = req.body
//     console.log(name)
//     console.log(email)
//     try {
//         if (name.trim() && email.trim()) {
//             user.push({ id: user.length + 1, ...req.body })
//             return res.status(200).send({ status: 200, massage: "user added sucessfully" }) // You will send the response of the server in the return until the pig stops

//         } else {
//             res.status(403).send({ status: 403, massage: "Email and Name is requied" })
//         }
//     } catch (err) {
//         return res.status(500).send({ status: 500, message: err.message })  // 500 err is show as internal server code like your server is crash
//         console.log(err.massage)
//     }
// })

// app.delete("/user/:id", (req, res) => {
//     let index = user.findIndex(v => v.id === Number(req.params.id))
//     if (index !== -1) {

//         user.splice(index, 1)
//         res.send("user deleted sucessful")

//         console.log(req.params)
//     }
// })


// app.put("/user/:id", (req, res) => {
//     let index = user.findIndex(v => v.id === Number(req.params.id))
//     if (index !== -1) {

//         user.splice(index, 1, { id: Number(req.params.id), ...req.body })
//         res.send("user updated sucessful")
//     }
// })
