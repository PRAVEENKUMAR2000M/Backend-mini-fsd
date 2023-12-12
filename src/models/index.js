import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

try {
    mongoose.connect(`${process.env.MONGODB_URL}/${process.env.MONGOBD_NAME}`)
} catch (error) {
    console.log(error)
}

export default mongoose;