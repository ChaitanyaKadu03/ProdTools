import express from "express";
import { authentication } from '../middlewares/authentification'
import { userInfo } from '../database/db'

const Router = express.Router()

Router.use(express.json())

Router.get('/', authentication, async (req, res) => {
    const email: string = res.locals.theEmail
    const password: string = res.locals.thePassword

    const theUser = await userInfo.findOne({ email, password })

    if (!theUser) {
        return res.status(500).json({
            msg: 'Failed to find the user',
            success: false
        })
    }

    res.status(200).json({
        msg: "The user is logged in!",
        success: true,
        userId: theUser._id
    })
})

export default Router


// Steps/Approach
// 1. Takes Inputs => From res.locals => theEmail and thePassword
// 2. Finds the user from usermodel