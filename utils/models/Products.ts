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
//   mainImage: {
//     type: String,
//   },
//   category: {
//     type: String,
//   },
//   properties: {
//     color: String,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   userId: {
//     type: String,
//     required: true,
//   },
});

const Product =
  mongoose.models?.Product || mongoose.model("Product", ProductSchema);

export default Product;
