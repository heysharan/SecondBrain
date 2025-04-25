import { Router } from 'express';
import { userMiddleware } from '../middlewares/userMiddleware';
import { NotesModel } from '../db';

const notesRouter = Router();

notesRouter.post('/content', userMiddleware, async (req, res) => {
    const { link, type, title } = req.body
    await NotesModel.create({
        link: link,
        type: type,
        title: title,
        userId: req.userId
    })
    res.json({
        message: 'Content Added!'
    })
})

notesRouter.get('/content', userMiddleware, async (req, res) => {
    const userId = req.userId;
    const content = await NotesModel.find({
        userId: userId
    }).populate("userId", "firstName")

    res.json({
        content: content
    })
})

notesRouter.delete('/content',userMiddleware, async(req, res) => {
    const { notesId } = req.body

    await NotesModel.deleteMany({
        _id: notesId,
        userId: req.userId
    })

    res.json({
        message: 'Content Deleted !'
    })

})

export { notesRouter };


