import 'dotenv/config'
import { Request ,Response, NextFunction } from "express"
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.token;

    try{
       const decodedData = jwt.verify(authHeader as string, JWT_SECRET!)
       if(decodedData){
        //@ts-ignore
        req.userId = decodedData.id
       }
       next() 
    }catch(e){
       res.status(403).json({
        message: "You are not logged in !"
       }) 
    }
}

export { userMiddleware }