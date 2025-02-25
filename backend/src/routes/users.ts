import express from "express";
import { userController } from "../controllers";
import { check } from "express-validator";

const userRouter = express.Router();

// Register user (POST)
userRouter.post(
  "/register",
  [
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  userController.register
);

export default userRouter;
