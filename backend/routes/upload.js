import express from "express"
import multer from "multer";
import fs from "fs-extra"
import "dotenv/config"
import cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name: 'djnnigkvr',
    api_key: '143985329989346',
    api_secret: 'CgUPzXaQHLOr-BGHIxveTHFijzo'
});


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'image/')
    },
    filename: function (req, file, cb) {

        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })
const router = express.Router()

router.post("/", upload.single('file'), (req, res) => {

    fs.readdirSync('image/').forEach(file => {
        console.log(file);

        cloudinary.v2.uploader.upload(`image/${file}`, {}, (error, result) => {
            fs.remove(`image/${file}`, err => {
                if (err) return console.error(err)
                console.log('success!')
            })
            if (error) {
                res.status(401).send({ status: 401, error: error })
            }
            res.status(200).send({ status: 200, upload: "uploaded", url: result.url })

        });
    });

    console.log("req=================>", req.file.originalname)

})

export default router;