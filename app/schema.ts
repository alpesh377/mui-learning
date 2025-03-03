import {z} from "zod"

export const schema = z.object({
    email: z.string().email("Email is Invalid").min(1,"Email is required"),
    password: z.string().min(6,"Password must be 6 letters long"),
    phoneNumber: z.string().min(10,"number must 10 digit long").max(10,"enter 10 digit number"),
    country : z.string().min(1,"Country is required"),
    gender: z.union([z.enum(["male", "female"]), z.null()]).nullable()
      
})