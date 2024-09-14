import express from "express";
import { authentication } from "../../middlewares/authentification";
import { provideUserId } from "../../middlewares/provideUserId";
import { taskFlowBranchTodos } from '../../database/taskFLow/taskFlow.db'

const Router = express.Router()

Router.use(express.json())

Router.get('/', authentication, provideUserId, async (req, res) => {
    const userId = res.locals.theUserId

    const branchData = await taskFlowBranchTodos.find({ userId })

    if (!branchData) {
        return res.status(411).json({
            msg: "Could not find the branch.",
            success: false
        })
    }

    res.status(200).json({
        msg: 'Found all the todos',
        success: true,
        data: branchData
    })
})

export default Router

// Steps/Approach
// 1. Takes Inputs => userId 
// 2. Find all the branches 
// 4. Returns the result
