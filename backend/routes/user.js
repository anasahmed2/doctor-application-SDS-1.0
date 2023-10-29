import express, { text } from "express"
import User from "../Modal/index.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import joi from "joi"
import transporter from "../helpers/index.js"
import "dotenv/config"
import verifyToken from "../middleware/verifyToken.js"
const router = express.Router()


const user = [{
    id: 1,
    name: 'anas',
    email: "muhammadanas@gmail.com"
}, {
    id: 2,
    name: 'hasan',
    email: "hasan@gmail.com"
}]


const userSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.number().optional().min(10),
    password: joi.string().required().min(8)
})

const userLoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})




router.get("/", verifyToken, async (req, res) => {
    const user = await User.find()
    
    res.status(200).send({ status: 200, user: user })
})

router.delete("/:id", async (req, res) => {
    await User.deleteOne({ _id: req.params.id })
    res.status(200).send({ massage: "user delete successfully" })
})

router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        await userSchema.validateAsync(req.body);
        const password = await bcrypt.hash(req.body.password, 10)
        const user = new User({ ...req.body, password })
        const newUser = await user.save()
        const token = jwt.sign({ _id: newUser._id, email: newUser.email }, process.env.JWT_SECRET
            , {
                expiresIn: "24h", // this is the formate in 24 house given 
            })

        transporter.sendMail({
            to: user.email,
            form: "muhammadanas61222@gmail.com"
            , text: `HI ${user.name} ,
    you are register to my `

        })
        console.log("post user=======>", user)
        return res.status(200).send({ status: 200, massage: "sucess add", token, user: newUser })
    } catch (error) {
        return res.status(401).send({ status: 401, massage: `err=======>${error.message}` })

    }
})



router.post("/login", async (req, res) => {
    try {
        await userLoginSchema.validateAsync(req.body);
        const { email, password } = req.body
        const user = await User.findOne({ email: email }).then(res => res.toObject())
        if (!user) {
            return res.status(401).send({ status: 401, massage: `user not found` })
        }
        const compare = await bcrypt.compare(password, user.password)
        if (!compare) {
            return res.status(403).send({ status: 403, massage: `Incorrect password` })
        }
        delete user.password
        const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET
            , {
                expiresIn: "24h", // this is the formate in 24 house given 
            })

        return res.status(200).send({ status: 200, user, token, massage: "sucess" })

    } catch (error) {

        return res.status(401).send({ status: 401, massage: `err=======>${error.message}` })
    }
  
})
export default router;
