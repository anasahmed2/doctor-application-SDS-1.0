
import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: true,
    },
    description: {
        type: Schema.Types.String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
}, {
    timestamps: {
        createdAt: " user create time",
        updatedAt: " user update time",
    },
})

const Post = mongoose.model("post", PostSchema)

export default Post;