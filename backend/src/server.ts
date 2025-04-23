import express from 'express'
import { userRouter } from './routes/user'
import { notesRouter } from './routes/notes';
import { linkRouter } from './routes/links';
import { connect } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT

const app = express();
app.use(express.json());

app.use('/api/v1/user', userRouter)
app.use('/api/v1/notes', notesRouter)
app.use('/api/v1/brain', linkRouter)

const main = async () => {
    try{
        await connect(MONGODB_URL!)  // the `!` tells TS "I swear this isn't undefined"
        console.log('Connected to MongoDB Successfully')
    }catch(e) {
        console.error(`MongoDB connection error : ${e}`)
        return
    }
    
    app.listen(3000, () => {
        console.log(`Server running on PORT ${PORT}`)
    })
}

main()
