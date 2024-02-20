import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

async function login(req, res) {
  console.log("Attempt to login");
  const user = await User.findOne({ username: req.body.username });
  console.log(user);
  if (user === null)
    return res.status(400).json({ message: "incorrect username/password " });

  const correctPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!correctPassword)
    return res.status(400).json({ message: "incorrect username/password " });

  const userToken = jwt.sign(
    {
      id: user._id,
    },
    process.env.SECRET_KEY
  );

  res
    .cookie("usertoken", userToken, process.env.SECRET_KEY, {
      httpOnly: true,
      expires: new Date(Date.now() + 90000000),
    })
    .json({
      msg: "success!",
    });
}

async function register(req, res) {
  console.log("initiating register...", req.body);

  const usernameExist = await User.findOne({ username: req.body.username });

  if (usernameExist?.username == req.body.username) {
    console.log(
      "THIS USERNAME EXIST?:",
      usernameExist?.username == req.body.username
    );
    return res.status(400).json({ message: "Username taken!" });
  }
  const user = await User.create(req.body);
  console.log("username", req.body.username);
  const userToken = jwt.sign(
    {
      id: user._id,
    },
    process.env.SECRET_KEY
  );

  res
    .cookie("usertoken", userToken, process.env.SECRET_KEY, {
      httpOnly: true,
      expires: new Date(Date.now() + 90000000),
    })
    .json({
      msg: "success!",
    });
}

async function logout(req, res) {
  console.log("Goodbye!");
  res.clearCookie("usertoken");
  res.sendStatus(200);
}

async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400);
    res.status(400).json(err);
  }
}

async function getLoggedUser(req, res) {
  try {
    const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
    const user = await User.findById({ _id: decodedJwt?.payload?.id });

    res.json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function clearData(req, res) {
  try {
    const users = await User.deleteMany();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

export { getAllUsers, register, login, logout, getLoggedUser, clearData };
