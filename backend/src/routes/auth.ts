import express from "express";
import { authController } from "../controllers";
import { verifyToken } from "../middlewares";
import { check } from "express-validator";

const authRouter = express.Router();

// Login Route (POST)
authRouter.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Password with 6 or more characters is required"
    ).isLength({
      min: 6,
    }),
  ],
  authController.login
);

// Logout Route (POST)
authRouter.post("/logout", authController.logout);

// Validate Token Route (GET)
authRouter.get("/validate-token", verifyToken, authController.validateToken);

export default authRouter;
