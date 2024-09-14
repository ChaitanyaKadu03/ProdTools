import express from "express";
import jwt from 'jsonwebtoken'
import { userInfo } from '../database/db'
import * as dotenv from 'dotenv'
dotenv.config()
const JWT_PRIVATE_KEY: string = process.env.JWT_PRIVATE_KEY || ''
import signinSchema from '../zod/signin.zod'
import { IuserSchema } from "../interfaces/interface.db";

const Router = express.Router()

Router.use(express.json())

Router.post('/', async (req, res) => {
    const { email, password } = req.body

    const result = signinSchema({ email, password }) // zod validation

    if (!result.success) {  // If zod parse fails then the inputs are incorrect
        return res.status(411).json({
            msg: "Inputs are invalid",
            error: result.error,
            success: false
        })
    }

    const userInfoData = await userInfo.findOne({ email, password })

    if (!userInfoData) {
        return res.status(411).json({
            msg: "Could not find the user",
            success: false
        })
    }

    const theUserInfoData: IuserSchema = userInfoData

    const token = jwt.sign({ email: theUserInfoData.email, firstName: theUserInfoData.firstName, lastName: theUserInfoData.lastName, password: theUserInfoData.password }, JWT_PRIVATE_KEY)

    if (!token) {
        return res.status(411).json({
            msg: "Could not generate token",
            success: false
        })
    }

    return res.status(200).json({
        msg: "Welcome to ProdTools!",
        success: true,
        token
    })
})

export default Router

// Steps/Approach
// 1. Takes Inputs
// 2. Does Zod Validation
// 3. Generates JWT Token