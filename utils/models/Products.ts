import mongoose from "mongoose";
import { Schema } from "mongoose";

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: false,
  },
  category: {
    type: String,
  },
  properties: {
    color: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Product =
  mongoose.models?.Product || mongoose.model("Product", ProductSchema);

export default Product;
