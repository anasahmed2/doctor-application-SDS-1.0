import express from "express"
import User from "../Modal/index.js"
import joi from "joi"
import transporter from "../helpers/index.js"
import "dotenv/config"
import verifyToken from "../middleware/verifyToken.js"
import { addPost, getAllPost } from "../services/post.js"
const router = express.Router()

const postSchema = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    author: joi.string().required()
})

router.get("/", async (req, res) => {
    try {

        const allPost = await getAllPost(req.body)
        console.log(allPost)
        return res.status(200).send({ status: 200,  message: `post added sucessfully` , allPost })

    } catch (err) {
        return res.status(401).send({ status: 401, message: err.message })
    }
})


router.post("/", async (req, res) => {
    try {
        await postSchema.validateAsync(req.body);
        const post = await addPost(req.body)
        return res.status(200).send({ status: 200, post, message: `post added sucessfully` })

    } catch (err) {
        return res.status(401).send({ status: 401, message: err.message })
    }
})



export default router;