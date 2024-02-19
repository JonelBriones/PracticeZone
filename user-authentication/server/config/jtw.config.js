import { connect } from "mongoose";
import dotenv from "dotenv";
// import jtw from "jsonwebtoken";
const jtw = require("jsonwebtoken");
dotenv.config();
const User = require("../models/models");

const payload = {
  id: user._id,
};
const userToken = jwt.sign(payload, process.env.SECRET_KEY);

// async function runAsyncFunctions(val) {
//   try {
//     const firstResult = await firstFunc(val);
//     const secondResult = await secondFunc(firstResult);

//     return secondResult;
//   } catch (error) {
//     throw error;
//   }
// }
