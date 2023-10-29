import Post from "../Modal/post.js"
import mongoose from "mongoose"

const addPost = async (data) => {
    const post = new Post(data)
    return await post.save()
}

const getAllPost =async () => {
return await Post.aggregate([
    // {
    //     $match:{ author :new mongoose.Types.ObjectId
    //             ('65258ab150403382c650c74c')}
    // }
    // {$lookup:{
    //     from:"users",
    //     localField:"author",
    //     foreignField:"_id",
    //     as:"author"
    // }}

    {
        $:{

        }
    }
])
}


export { addPost, getAllPost }
