import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: Schema.Types.String,
        required: true,
    },
    phone: {
        type: Schema.Types.String,
     
    }
    // , emailVerify: {
    //     type: Schema.Types.Boolean
    //     // jab user ka account bane to by default false jae  or node mailer ke zraye email 
    //     // chali jae or us mail main server ka link chala jae ya front end ka link bhje dain
    //     // jesi user link pe click kare tu use link main kuch qurry param set kardain like id xyz
    //     // user jesi us link pe jae ek api cal ho update user wali or wo email verify ko ture karde  
    // }

}, {
    timestamps: {
        createdAt: " user create time",
        updatedAt: " user update time",
    },
})

const User = mongoose.model("User", UserSchema)

export default User;