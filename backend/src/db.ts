import { model, Schema, Types } from 'mongoose';

const contentTypes = ['image', 'video', 'article', 'audio'];
  
const usersSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
})

const notesSchema = new Schema({
    link: { type: String, required: true },
    type: { type: String, enum: contentTypes, required: true },
    title: { type: String, required: true },
    tags: [{ type: String, ref: 'Tag' }],
    userId: { type: Types.ObjectId, ref: 'User', required: true }
})

const tagsSchema = new Schema({
    title: { type: String, unique: true, required: true }
})

const linksSchema = new Schema({
    hash: String,
    userId: { type: Types.ObjectId, ref: 'User'}
})


const userModel = model('User', usersSchema);
const notesModel = model('Note', notesSchema);
const tagsModel = model('Tag', tagsSchema);
const linksModel = model('Link', linksSchema);

export { userModel, notesModel, tagsModel, linksModel }