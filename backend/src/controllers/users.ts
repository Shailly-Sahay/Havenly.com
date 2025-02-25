import { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

const registerUser = {
  /**
   * @desc Register a new user (POST)
   * @route POST /api/users/register
   */
  register: async (req: Request, res: Response) => {
    // Validate the request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ message: errors.array() });
      return;
    }

    try {
      // Check if user already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        res.status(400).json({ message: "User already exists" });
        return;
      }

      // Create and save new user
      user = new User(req.body);
      await user.save();

      // Generate JWT token
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "1d" }
      );

      // Store token in HTTP-only cookie
      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });

      res.status(200).send({ message: "User registered successfully!" });
    } catch (error) {
      res.status(500).send({ message: "Something went wrong" });
    }
  },
};

export default registerUser;
