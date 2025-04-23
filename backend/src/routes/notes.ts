import { Router } from 'express';
import { userMiddleware } from '../middlewares/userMiddleware';
import { notesModel } from '../db';

const notesRouter = Router();

notesRouter.post('/content', userMiddleware, async (req, res) => {
    const { link, type, title, tags } = req.body
    await notesModel.create({
        link: link,
        type: type,
        title: title,
        tags: tags,
        //@ts-ignore
        userId: req.userId
    })
    res.json({
        message: 'Content Added!'
    })
})

notesRouter.get('/content', userMiddleware, async (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = await notesModel.find({
        userId: userId
    }).populate("userId", "firstName")

    res.json({
        content: content
    })
})

notesRouter.delete('/content',userMiddleware, async(req, res) => {
    const { notesId } = req.body

    await notesModel.deleteMany({
        _id: notesId,
        //@ts-ignore
        userId: req.userId
    })

    res.json({
        message: 'Content Deleted !'
    })

})

export { notesRouter };