import mongoose from "mongoose";
import dotenv from "dotenv/config";

const mongoUri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);

    console.log("Database Connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
