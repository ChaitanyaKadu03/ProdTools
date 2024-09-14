import zod from 'zod'
import { Isignin } from '../interfaces/interface.signin'

const signinSchema = zod.object({
    email: zod.string().email().min(6),
    password: zod.string().min(4),
})

const signinZodCheck = ((data: Isignin) => {
    const result = signinSchema.safeParse(data)

    return result
})

export default signinZodCheck