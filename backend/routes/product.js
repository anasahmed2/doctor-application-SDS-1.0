import express from "express"
import PRODUCT from "../constant/product.js"
const router = express.Router()



router.get("/",(req,res)=>{
   res.status(200).send({product:PRODUCT}) 
})

export default router;