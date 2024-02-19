import { connect } from "mongoose";
import dotenv from "dotenv";
import jtw from "jsonwebtoken";
dotenv.config();

const MONGOD_URI = process.env.MONGODB_URI;

async function dbConnect() {
  try {
    await connect(MONGOD_URI, {
      dbName: "usersDB",
    });
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default dbConnect;
