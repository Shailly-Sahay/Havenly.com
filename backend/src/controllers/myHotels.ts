import express, { Request, Response } from "express";
import cloudinary from "cloudinary";
import { validationResult } from "express-validator";
import Hotel from "../models/hotels";
import { HotelType } from "../shared/types";

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
      const imageUrls = await uploadImages(imageFiles);
      newHotel.imageUrls = imageUrls;
      newHotel.lastUpdated = new Date();
      newHotel.userId = req.userId;

      // Save the new hotel to db
      const hotel = new Hotel(newHotel);
      await hotel.save();

      res.status(201).send(hotel);
      return;
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      return;
    }
  },

  getUserHotels: async (req: Request, res: Response) => {
    try {
      const hotels = await Hotel.find({ userId: req.userId });
      res.json(hotels);
    } catch (error) {
      res.status(500).json({ message: "Error fetching hotels" });
    }
  },

  getHotel: async (req: Request, res: Response) => {
    const id = req.params.id.toString();
    try {
      const hotel = await Hotel.findOne({
        _id: id,
        userId: req.userId,
      });

      res.json(hotel);
    } catch (error) {
      res.status(500).json({ message: "Error fetching hotels" });
    }
  },

  updateHotel: async (req: Request, res: Response) => {
    try {
      console.log(req.body);
      const updatedHotel: HotelType = req.body;
      updatedHotel.lastUpdated = new Date();

      const hotel = await Hotel.findOneAndUpdate(
        {
          _id: req.params.hotelId,
          userId: req.userId,
        },
        updatedHotel,
        { new: true }
      );

      if (!hotel) {
        res.status(404).json({ message: "Hotel not found" });
        return;
      }

      const files = req.files as Express.Multer.File[];
      const updatedImageUrls = await uploadImages(files);

      hotel.imageUrls = [
        ...updatedImageUrls,
        ...(updatedHotel.imageUrls || []),
      ];

      await hotel.save();
      res.status(201).json(hotel);
    } catch (error) {
      res.status(500).json({ message: "Something went throw" });
    }
  },
};

export default myHotels;

async function uploadImages(imageFiles: Express.Multer.File[]) {
  const uploadPromises = imageFiles.map(async (image) => {
    const b64 = Buffer.from(image.buffer).toString("base64");
    let dataURI = "data:" + image.mimetype + ";base64," + b64;
    const res = await cloudinary.v2.uploader.upload(dataURI);

    return res.url;
  });

  // If upload was successfull, add the urls to the url
  const imageUrls = await Promise.all(uploadPromises);
  return imageUrls;
}
