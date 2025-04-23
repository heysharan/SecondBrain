import 'dotenv/config'
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { userModel } from '../db';

const userRouter = Router();

const JWT_SECRET = process.env.JWT_SECRET;


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

userRouter.post('/signin', async (req, res) => {
    const userInputSchema = z.object({
        email: z.string().email('Enter valid email !'),
        password: z.string()
    })

    type finalUserInputSchema = z.infer<typeof userInputSchema>

    const response = userInputSchema.safeParse(req.body)

    if(!response.success){
        const error = response.error.issues.map(e => ({
            field: e.path,
            error: e.message
        }))
        res.status(409).json({
            error: error
        })
    }

    const { email, password }: finalUserInputSchema = req.body;


        const user = await userModel.findOne({
            email: email
        })
        if(!user){
            res.send(404).json({error: 'User not found!'})
        }

        const verifiedUser = await bcrypt.compare(password, user!.password) // user! tells TypeScript: “Don’t worry, I know it’s not null because I already checked above.”        
        
        if(verifiedUser){
            const token = jwt.sign({
                id: user!._id
            }, JWT_SECRET!) //// the `!` tells TS "I swear this isn't undefined"
            res.status(200).json({
                token: token
            })
        }else {
            res.status(403).json({
                error: 'Invalid credentials'
            })
        }
})

export { userRouter }