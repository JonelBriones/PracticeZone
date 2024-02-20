import { Router } from "express";

import {
  getAllUsers,
  login,
  register,
  logout,
  getLoggedUser,
  clearData,
} from "../controllers/user.controller.js";

import { authenticate } from "../config/jtw.config.js";

const router = Router();

router.route("/users").get(getAllUsers);
router.route("/logout").post(logout);
router.route("/clearData").post(clearData);

// authenticated routes
router.route("/user", authenticate).get(getLoggedUser);
router.route("/register", authenticate).post(register);
router.route("/login", authenticate).post(login);

export default router;
