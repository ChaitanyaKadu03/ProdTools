import express from "express";
import { authentication } from "../../middlewares/authentification";
import { provideUserId } from "../../middlewares/provideUserId";
import { taskFlowBranchTodos, taskFlowIndividualTodos } from '../../database/taskFLow/taskFlow.db'

const Router = express.Router()

Router.use(express.json())

Router.post('/', authentication, provideUserId, async (req, res) => {
    const userId = res.locals.theUserId
    const { name, newName } = req.body

    const branchData = await taskFlowBranchTodos.findOneAndUpdate({ name, userId }, { $set: { name: newName } })

    if (!branchData) {
        return res.status(411).json({
            msg: "Could not find the branch.",
            success: false
        })
    }

    res.status(200).json({
        msg: 'Updated the branch!',
        success: true
    })
})

export default Router

// Steps/Approach
// 1. Takes Inputs => userId , name, newName
// 2. Find the branch and update the name
