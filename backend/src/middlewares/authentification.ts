import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()
const JWT_PRIVATE_KEY: string = process.env.JWT_PRIVATE_KEY || ''

const authentication = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization!

    if (!token) {
        return res.status(411).json({
            msg: "Didn't receive any token",
            success: false
        })
    }

    const actualToken = Array.isArray(token) ? token[0] : token;

    jwt.verify(actualToken, JWT_PRIVATE_KEY, (err: any, decoded: any) => {

        if (err) {
            return res.status(411).json({
                msg: 'Authentification Failed',
                success: false,
                error: err
            })
        } else {
            res.locals.theEmail = decoded.email
            res.locals.thePassword = decoded.password

            next()
        }
    })
}

export { authentication }


// Steps/Approach
// 1. Takes Inputs => from headers => token
// 2. Does jsonwebtoken verification
// 3. Assigns res.locals => theEmail and thePassword