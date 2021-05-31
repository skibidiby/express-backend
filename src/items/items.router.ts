/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import BaseItem from "./item.schema";

/**
 * Router Definition
 */
export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */
// GET items
itemsRouter.get("/", async (req: Request, res: Response) => {
  BaseItem.find()
    .exec()
    .then((results) => {
      return res.status(200).json({
        items: results,
        count: results.length,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
});

// POST items
itemsRouter.post("/", async (req: Request, res: Response) => {
  let { name, description } = req.body;
  const item = new BaseItem({
    _id: new mongoose.Types.ObjectId(),
    name,
    description,
  });
  return item
    .save()
    .then((results) => {
      return res.status(200).json({
        items: results,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
});
