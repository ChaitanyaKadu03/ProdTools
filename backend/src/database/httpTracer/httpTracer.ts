import { mongoose, userInfo } from '../db'
import { IhttpTracerSchema } from '../../interfaces/interface.httpTracer'

const httpTracerSchema = new mongoose.Schema({
    httpData: {
        type: Array,
        require: true,
        default: []
    },
    userId: {
        type: String,
        require: true,
        ref: userInfo
    },
})

const httpTracer = mongoose.model<IhttpTracerSchema>("HttpTracer", httpTracerSchema)

export { httpTracer }