/* MongoDB connection */
import mongoose from 'mongoose';
import { db } from './imports';

export const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }); //Mongoose.connect returns a PROMISE. So we must await it before continuing.
    console.log('MongoDB Connected!');
  } catch (err) {
    console.error(err.message);
    process.exit(1); //exit process with failure (code 1)
  }
};
