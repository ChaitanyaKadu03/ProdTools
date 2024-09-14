import express from "express";
import createBranch from './createBranch'
import createTodo from './createTodo'
import fetchBranch from './fetchBranch'
import fetchTodo from './fetchTodo'
import updateBranch from './updateBranch'
import updateTodo from './updateTodo'

const Router = express.Router()

Router.use(express.json())

Router.use('/create-branch', createBranch)
Router.use('/create-todo', createTodo)
Router.use('/fetch-branch', fetchBranch)
Router.use('/fetch-todo', fetchTodo)
Router.use('/update-branch', updateBranch)
Router.use('/update-todo', updateTodo)

export default Router

// Steps/Approach
// 1. Takes Inputs
// 2. Does Zod Validation
// 3. Generates JWT Token