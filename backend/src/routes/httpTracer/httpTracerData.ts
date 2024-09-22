import express from 'express'
import { httpTracer } from '../../database/httpTracer/httpTracer'
import { provideUserId } from '../../middlewares/provideUserId'
import { authentication } from '../../middlewares/authentification'

const Router = express.Router()

Router.use(express.json())

Router.use(authentication, provideUserId, async (req, res) => {
    const userId = res.locals.theUserId

    const response = await httpTracer.findOne({ userId })

    // await httpTracer.find({ userId })

    if (!response) {
        return res.status(400).json({
            msg: `Couldn't update the http tracer database`,
            success: false
        })
    }

    res.status(200).json({
        msg: `Successfull!`,
        success: true,
        response
    })
})

export default Router