import express from 'express'
import { httpTracer } from '../../database/httpTracer/httpTracer'
import { provideUserId } from '../../middlewares/provideUserId'
import { authentication } from '../../middlewares/authentification'

const Router = express.Router()

Router.use(express.json())

Router.use(authentication, provideUserId, async (req, res) => {
    const userId = res.locals.theUserId

    const data = [
        { method: req.method },
        { originalUrl: req.originalUrl },
        { hostname: req.hostname },
        { protocol: req.protocol },
        { ip: req.ip },
        { query: req.query },
        { params: req.params },
        { headers: req.headers },
        { cookies: req.cookies },
        { signedCookies: req.signedCookies },
        { body: req.body },
        { baseUrl: req.baseUrl },
    ]

    const response = await httpTracer.findOneAndUpdate({ userId }, { $push: { httpData: data } })

    if (!response) {
        return res.status(400).json({
            msg: `Couldn't update the http tracer database`,
            success: false
        })
    }
    res.status(200).json({
        msg: `Successfull!`,
        success: true,
        data
    })
})

export default Router