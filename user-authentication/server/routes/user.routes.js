import { Router } from "express";

import {
  getAllUsers,
  login,
  register,
  logout,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/users").get(getAllUsers);
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);

export default router;
