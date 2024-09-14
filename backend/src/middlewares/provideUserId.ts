import { Request, Response, NextFunction } from 'express'
import { userInfo } from '../database/db'

const provideUserId = async (req: Request, res: Response, next: NextFunction) => {
    const email: string = res.locals.theEmail
    const password: string = res.locals.thePassword

    const theUser = await userInfo.findOne({ email, password })

    if (!theUser) {
        return res.status(500).json({
            msg: 'Failed to find the user',
            success: false
        })
    }

    res.locals.theUserId = theUser._id

    next()
}

export { provideUserId }


// Steps/Approach
// 1. Takes Inputs => from headers => token
// 2. Does jsonwebtoken verification
// 3. Assigns res.locals => theEmail and thePassword