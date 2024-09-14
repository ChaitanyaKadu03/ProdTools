import express from "express";
import { authentication } from "../../middlewares/authentification";
import { provideUserId } from "../../middlewares/provideUserId";
import { taskFlowBranchTodos, taskFlowIndividualTodos } from '../../database/taskFLow/taskFlow.db'

const Router = express.Router()

Router.use(express.json())

Router.get('/', authentication, provideUserId, async (req, res) => {
    const userId = res.locals.theUserId
    const { name } = req.headers

    const branchData = await taskFlowBranchTodos.findOne({ name, userId })

    if (!branchData) {
        return res.status(411).json({
            msg: "Could not find the branch.",
            success: false
        })
    }

    const result = await taskFlowIndividualTodos.find({ branchId: branchData._id })

    if (!result) {
        return res.status(411).json({
            msg: "Failed to find all todo.",
            success: false
        })
    }


    res.status(200).json({
        msg: 'Found all the todos',
        success: true,
        data: result
    })
})

export default Router

// Steps/Approach
// 1. Takes Inputs => userId , name
// 2. Find the branch id
// 3. Find all the todos
// 4. Returns the result
