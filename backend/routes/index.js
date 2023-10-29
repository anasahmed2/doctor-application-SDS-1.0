import express from "express"
import user from "../controler/user.js"
import product from "./product.js"
import upload from "./upload.js"
import post from "../controler/post.js"
const router = express.Router()


router.use ("/user" , user)
router.use ("/post" , post)
router.use("/product" ,product )
router.use ("/upload" , upload)
export default router;