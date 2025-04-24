import { Router } from 'express';
import { userMiddleware } from '../middlewares/userMiddleware';
import { LinksModel, NotesModel } from '../db';
import { random } from '../utils';

const linkRouter = Router();

linkRouter.post('/share', userMiddleware, async (req, res) => {
    const { share } = req.body;
    
    const hash = random(10);
    
    if(share){
        const shareLink = await LinksModel.findOne({    // check if user has already a shareable link, if it exist return the link
            userId: req.userId
        })
    
        if(shareLink) {           
            res.json({
                message: `/share/${shareLink.hash}`
            })
            return
        }

        await LinksModel.create({         // this only creates a new shareable link for those users which dont already have one
            userId: req.userId,
            hash: hash
        })
        res.json({
            message: `/share/${hash}`
        })
    }
    else{
        await LinksModel.deleteOne({       // deletes if the share is false
            userId: req.userId
        })
        res.json({
            message: `Removed link`
        })
    }
})

linkRouter.get('/:sharelink', async (req, res) => {
    const link = req.params.sharelink;

    const user = await LinksModel.findOne({
        hash: link
    })
    if(!user){
        res.json({
            message: 'Invalid link!'
        })
        return
    }
    
    const content = await NotesModel.find({
        userId: user.userId
    }).populate('userId', 'firstName')

    res.json({
        content: content
    })

})

export { linkRouter };