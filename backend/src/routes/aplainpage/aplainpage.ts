import express from "express";
import { aPlainPage } from '../../database/aPlainPage/aPlainPage.db'
import { authentication } from "../../middlewares/authentification";
import { provideUserId } from "../../middlewares/provideUserId";

const Router = express.Router()

Router.use(express.json())

// // // // // // // // //

Router.get('/', authentication, provideUserId, async (req, res) => {
    const userId = res.locals.theUserId

    const result = await aPlainPage.findOne({ userId })

    if (!result) {
        return res.status(411).json({
            msg: 'Could not find the user data',
            success: false
        })
    }

    res.status(200).json({
        msg: "successfully found the user data",
        success: true,
        data: result.data
    })
})


// Steps/Approach
// 1. authetication => To confirm is the user logged in
// 2. procideUserId => To get the userId
// 3. Finds the user from usermodel
// 4. Return the userData

// // // // // // // // //

Router.post('/', authentication, provideUserId, async (req, res) => {
    const userId = res.locals.theUserId
    const { newData } = req.body

    const result = await aPlainPage.findOneAndUpdate({ userId }, { $set: { data: newData } })

    if (!result) {
        return res.status(411).json({
            msg: 'Could not find the user data',
            success: false
        })
    }

    res.status(200).json({
        msg: "successfully updated the user data",
        success: true,
    })
})


// Steps/Approach
// 1. authetication => To confirm is the user logged in
// 2. procideUserId => To get the userId
// 3. Finds the user from usermodel and update the data


export default Router