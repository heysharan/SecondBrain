import { model, Schema, Types } from 'mongoose';

const contentTypes = ['twitter', 'youtube'];
  
const UsersSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
})

const NotesSchema = new Schema({
    link: { type: String, required: true },
    type: { type: String, enum: contentTypes, required: true },
    title: { type: String, required: true },
    userId: { type: Types.ObjectId, ref: 'User', required: true }
})


const LinksSchema = new Schema({
    hash: String,
    userId: { type: Types.ObjectId, ref: 'User', required: true, unique: true}

})


const UserModel = model('User', UsersSchema);
const NotesModel = model('Note', NotesSchema);
const LinksModel = model('Link', LinksSchema);

export { UserModel, NotesModel, LinksModel }