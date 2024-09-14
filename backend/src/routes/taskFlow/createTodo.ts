import express from "express";
import { authentication } from "../../middlewares/authentification";
import { provideUserId } from "../../middlewares/provideUserId";
import { taskFlowBranchTodos, taskFlowIndividualTodos } from '../../database/taskFLow/taskFlow.db'

const Router = express.Router()

Router.use(express.json())

Router.put('/', authentication, provideUserId, async (req, res) => {
    const userId = res.locals.theUserId
    const { title, todos, name } = req.body

    const branchData = await taskFlowBranchTodos.findOne({ name, userId })

    if (!branchData) {
        return res.status(411).json({
            msg: "Could not find the branch.",
            success: false
        })
    }

    const result = await taskFlowIndividualTodos.create({ title, todos, branchId: branchData._id })

    if (!result) {
        return res.status(411).json({
            msg: "Failed to create the todo.",
            success: false
        })
    }

    res.status(200).json({
        msg: 'New todo added successfully!',
        success: true,
        data: result
    })
})

export default Router

// Steps/Approach
// 1. Takes Inputs => userId , name
// 2. Created new taskFlowBranchTodos schema
// 3. Returns the result