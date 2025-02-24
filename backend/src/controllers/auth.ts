import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const auth = {
  /**
   * @desc Login User (POST)
   * @route POST /api/auth/login
   */
  login: async (req: Request, res: Response) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ message: errors.array() });
      return;
    }

    const { email, password } = req.body;

    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({ message: "Invalid Credentials" });
        return;
      }

      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: "Invalid Credentials" });
        return;
      }

      // Generate JWT Token
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "1d" }
      );

      // Store token in an HTTP-only cookie
      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });

      res.status(200).json({ userId: user._id });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  },

  /**
   * @desc Logout User (POST)
   * @route POST /api/auth/logout
   */
  logout: (req: Request, res: Response) => {
    res.cookie("auth_token", "", {
      expires: new Date(0), // Expire the cookie immediately
    });

    res.sendStatus(200);
  },

  /**
   * @desc Validate JWT Token (GET)
   * @route GET /api/auth/validate-token
   */
  validateToken: (req: Request, res: Response) => {
    res.status(200).send({ userId: req.userId });
  },
};

export default auth;
