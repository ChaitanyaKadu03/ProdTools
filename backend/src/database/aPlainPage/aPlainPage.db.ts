import { mongoose, userInfo } from '../db'
// import {  } from '../../interfaces/interface.db'

const aPlainPageSchema = new mongoose.Schema({
    data: {
        type: String,
        require: true,
        default: "Welcome!"
    },
    userId: {
        type: String,
        require: true,
        unique: true,
        /// <reference path="/userInfo" />
        ref: userInfo
    },
})

const aPlainPage = mongoose.model("aPlainPage", aPlainPageSchema)

export { aPlainPage }