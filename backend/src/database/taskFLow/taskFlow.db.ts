import { mongoose, userInfo } from '../db'
import { ItaskFlowBranchTodosSchema, ItaskFlowIndiviualTodosSchema } from '../../interfaces/interface.db'

const taskFlowBranchTodosSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3
    },
    userId: {
        type: String,
        require: true,
        /// <reference path="/userInfo" />
        ref: userInfo
    },
})

const taskFlowBranchTodos = mongoose.model<ItaskFlowBranchTodosSchema>("TaskFlowBranchTodos", taskFlowBranchTodosSchema)

const taskFlowIndividualTodosSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        minlength: 3
    },
    branchId: {
        type: String,
        require: true,
        /// <reference path="/taskFlowBranchTodos" />
        ref: taskFlowBranchTodos
    },
    todos: {
        type: Array,
        default: []
    }
})

const taskFlowIndividualTodos = mongoose.model<ItaskFlowIndiviualTodosSchema>("TaskFlowIndividualTodos", taskFlowIndividualTodosSchema)


export { taskFlowBranchTodos, taskFlowIndividualTodos }