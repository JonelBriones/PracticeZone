import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

async function login(req, res) {
  console.log("Attempt to login");
  const user = await User.findOne({ username: req.body.username });
  console.log(user);
  if (user === null) return res.sendStatus(400);

  // const correctPassword = await bcrypt.compare(
  //   req.body.password,
  //   user.password
  // ) ;

  const correctPassword = req.body.password == user.password;

  if (!correctPassword) return res.sendStatus(400);
  const userToken = jwt.sign(
    {
      id: user._id,
    },
    process.env.SECRET_KEY
  );

  res
    .cookie("usertoken", userToken, {
      httpOnly: true,
    })
    .json({
      msg: "success!",
    });
}

async function register(req, res) {
  console.log("initiating register...", req.body);
  const user = new User(req.body);
  user
    .save(req.body)
    .then((user) => {
      const userToken = jtw.sign(
        {
          id: user._id,
        },
        process.env.SECRET_KEY
      );
      res
        .cookie("usertoken", userToken, {
          httpOnly: true,
        })
        .json({ msg: "success!", user: user });
    })
    .catch((err) => res.json(err));
}

async function logout(req, res) {
  console.log(res.body);
  res.clearCookie("usertoken");
  res.sendStatus(200);
}

async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}

// app.get("/:id", (req, res) => {
//   const getUserById = users.find((user) => user.id == req.params.id);
//   res.json(getUserById);
// });

// register, login, logout,
export { getAllUsers, register, login, logout };
