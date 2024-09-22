import express from "express";
import { userInfo } from '../database/db'
import { taskFlowBranchTodos, taskFlowIndividualTodos } from '../database/taskFLow/taskFlow.db'
import { aPlainPage } from '../database/aPlainPage/aPlainPage.db'
import userInfoZodCheck from '../zod/userInfo.zod'
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv'
import { httpTracer } from "../database/httpTracer/httpTracer";
dotenv.config()
const JWT_PRIVATE_KEY: string = process.env.JWT_PRIVATE_KEY || ''

const Router = express.Router()

Router.use(express.json())

Router.post('/', async (req, res) => {
    const { email, firstName, lastName, password } = req.body

    const result = userInfoZodCheck({ email, firstName, lastName, password })  // zod => safeParse

    if (!result.success) {  // If zod parse fails then the inputs are incorrect
        return res.status(411).json({
            msg: "Inputs are invalid",
            error: result.error,
            success: false
        })
    }

    const token: string = jwt.sign({ email, firstName, lastName, password }, JWT_PRIVATE_KEY)  // generate jwt token

    if (!token) {
        return res.status(411).json({
            msg: "Could not generate token",
            success: false
        })
    }

    try {
        const userData = await userInfo.create({ email, firstName, lastName, password })  // Create userInfo schema

        const taskFlowBranchTodosData = await taskFlowBranchTodos.create({ name: 'Build Something!', userId: userData._id })  // Create taskFlowBranchTodos schema

        await taskFlowIndividualTodos.create({ title: 'Create a webite', todos: ['UI/UX Design', 'Create the backend', 'Complete the frontend'], branchId: taskFlowBranchTodosData._id })  // Create taskFlowIndividualTodos schema

        await aPlainPage.create({ data: 'Welcome!', userId: userData._id })  // Create aPlainPage schema

        await httpTracer.create({ httpData: [], userId: userData._id })  // Create httptracer schema

        return res.status(200).json({
            msg: "Welcome to ProdTools!",
            success: true,
            token
        })
    } catch (error) {
        return res.status(411).json({
            msg: "Failed to create userInfo/taskFlow/aplainpage schema",
            success: false
        })
    }
})

export default Router


// Steps/Approach
// 1. Takes Inputs
// 2. Does Zod Validation
// 3. Generates JWT Token
// 4. Creates userInfo Schema => taskFlowBranchTodosSchema => taskFlowIndividualTodosSchema => aPlainPageSchema