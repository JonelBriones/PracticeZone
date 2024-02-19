import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose.js";
import cookieParser from "cookie-parser";
import router from "./routes/user.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT;

dbConnect();

app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  cors({ credentials: true, origin: "http://localhost:8000" }),
  cookieParser()
);
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// app.get("/", (req, res) => {
//   res.json(users);
// });
// app.get("/:id", (req, res) => {
//   const getUserById = users.find((user) => user.id == req.params.id);
//   res.json(getUserById);
// });
