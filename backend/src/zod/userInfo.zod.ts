import zod from 'zod'
import { IuserSchema } from '../interfaces/interface.db'

const userInfoSchema = zod.object({
    email: zod.string().email().min(6),
    firstName: zod.string().min(3),
    lastName: zod.string().min(3),
    password: zod.string().min(4),
})

const userInfoZodCheck = ((data: IuserSchema) => {
    const result = userInfoSchema.safeParse(data)

    return result
})

export default userInfoZodCheck