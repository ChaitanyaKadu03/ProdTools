import mongoose from "mongoose";
import { IuserSchema } from '../interfaces/interface.db'

mongoose.connect('mongodb://127.0.0.1:27017/prodtools')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        minlength: 6
    },
    firstName: {
        type: String,
        require: true,
        minlength: 3
    },
    lastName: {
        type: String,
        require: true,
        minlength: 3
    },
    password: {
        type: String,
        require: true,
        minlength: 4
    }
})

const userInfo = mongoose.model<IuserSchema>("UserInfo", userSchema)

export { mongoose, userInfo }
