import mongoose, { Schema } from "mongoose";
import IBaseItem from "./item.interface";

const BaseItemSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number },
    description: { type: String, required: true },
    image: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IBaseItem>("BaseItem", BaseItemSchema)
