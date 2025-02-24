import express, { Request, Response } from "express";
import cloudinary from "cloudinary";
import { validationResult } from "express-validator";
import { HotelType } from "../models/hotels";
import { HotelSchema } from "../models";

const myHotels = {
  /**
   * @desc Register a new user (POST)
   * @route POST /api/users/register
   */
  post: async (req: Request, res: Response) => {
    try {
      const imageFiles = req.files as Express.Multer.File[];
      const newHotel: HotelType = req.body;

      // Upload images to cloudinary
      const uploadPromises = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURI = "data:" + image.mimetype + ";base64," + b64;
        const res = await cloudinary.v2.uploader.upload(dataURI);

        return res.url;
      });

      // If upload was successfull, add the urls to the url
      const imageUrls = await Promise.all(uploadPromises);
      newHotel.imageUrls = imageUrls;
      newHotel.lastUpdated = new Date();
      newHotel.userId = req.userId;

      // Save the new hotel to db
      const hotel = new HotelSchema(newHotel);
      await hotel.save();

      res.status(201).send(hotel);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  },
};

export default myHotels;
