// import { string } from 'yup';
import mongoose from './index.js';

const validationEmail = (e) => {
    var emailParttern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(e);
}


const userSchema = new mongoose.Schema({
    firstName: { type: String, reqiured: [true, "first name required"] },
    lastName: { type: String, required: [true, "last name required"] },
    email: { type: String, required: [true, "email required"] },
    role: { type: String, default: 'users' },
    status: { type: String, default: true },
    createAt: { type: Date, default: Date.now() }
}, {
    collection: 'users',
    versionKey: false
});

const userModel = mongoose.model('users', userSchema);

export default userModel;