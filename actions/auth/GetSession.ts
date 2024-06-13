'use server'
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export const GetSession = async () => {
    const token = cookies().get('session')?.value
    if (!token) return null;
    const decoded  = jwt.verify(token as string, process.env.JWT_SECRET as string)
    if (!decoded) return null;
    return decoded;
}

