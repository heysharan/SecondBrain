import 'dotenv/config'
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { userModel } from '../db';

const userRouter = Router();


userRouter.post('/signup', async (req, res) => {
    const userProfileSchema = z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string().email('Enter valid Email'),
        password: z.string()
        .regex(/[A-Z]/, 'Password should contain atleast one Uppercase letter')
        .regex(/[a-z]/, 'Password should contain atleast one lowercase letter')
        .regex(/[0-9]/, 'Password should contain atleast one number')
        .regex(/[\W_]/, 'Password should contain atleast one special character')
        .min(8)
        .max(20)
    })
    
    type finalUserProfileSchema = z.infer<typeof userProfileSchema> // Type inference in zod

    const response = await userProfileSchema.safeParse(req.body);
    

    if(!response.success){
        const error = response.error.issues.map(e => ({
            field: e.path,
            error: e.message
        }))
        res.status(409).send({
            error: error
        })
        return
    }

    const { email, password, firstName, lastName }: finalUserProfileSchema = req.body;

    const hashedPassword = await bcrypt.hash(password, 5);

    try{
        await userModel.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword
        })
        res.json({
            messsage: `${firstName}, you have signed up successfully!`
        })
    }catch(e) {
        res.status(409).json({
            message: `User already exists`
        })
    }
});

userRouter.post('/signin', (req, res) => {
    
})

export { userRouter }