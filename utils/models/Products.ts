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
  // category: {
  //   type: String,
  // },
  properties: Schema.Types.Mixed,
  price: {
    type: Number,
    required: true,
  },
  count: {
    type: Number
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
