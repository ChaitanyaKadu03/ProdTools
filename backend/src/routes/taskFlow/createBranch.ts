import express from "express";
import { authentication } from "../../middlewares/authentification";
import { provideUserId } from "../../middlewares/provideUserId";
import { taskFlowBranchTodos } from '../../database/taskFLow/taskFlow.db'

const Router = express.Router()

Router.use(express.json())

Router.put('/', authentication, provideUserId, async (req, res) => {
    const userId = res.locals.theUserId
    const name = req.body.name

    const result = await taskFlowBranchTodos.create({ userId, name })

    if (!result) {
        return res.status(500).json({
            msg: "Failed to create new branch.",
            success: false
        })
    }

    res.status(200).json({
        msg: "Successfully created a new branch.",
        success: true,
        data: result
    })
})

export default Router

// Steps/Approach
// 1. Takes Inputs => userId , name
// 2. Created new taskFlowBranchTodos schema
// 3. Returns the result