import express from "express";
import { authentication } from "../../middlewares/authentification";
import { provideUserId } from "../../middlewares/provideUserId";
import { taskFlowBranchTodos, taskFlowIndividualTodos } from '../../database/taskFLow/taskFlow.db'

const Router = express.Router()

Router.use(express.json())

Router.post('/', authentication, provideUserId, async (req, res) => {
    const userId = res.locals.theUserId
    const { name, title, newTitle, newTodos } = req.body

    const branchData = await taskFlowBranchTodos.findOne({ name, userId })

    if (!branchData) {
        return res.status(411).json({
            msg: "Could not find the branch.",
            success: false
        })
    }

    const result = await taskFlowIndividualTodos.findOneAndUpdate({ title, branchId: branchData._id }, { $set: { title: newTitle, todos: newTodos } })

    if (!result) {
        return res.status(411).json({
            msg: "Could not update the todo.",
            success: false
        })
    }

    res.status(200).json({
        msg: 'Updated the todo!',
        success: true
    })
})

export default Router

// Steps/Approach
// 1. Takes Inputs => userId , name, newName
// 2. Find the branch id
// 2. Find the todo and update the title and todos
