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
    default: null,
  },
  images: {
    type: [String],
    default: [],
  },
  category: {
    type: String,
    enum: ['jewelry', 'bags', 'watches', 'sunglasses', 'scarves', 'belts', 'hats', 'other'],
    default: 'other',
  },
  properties: Schema.Types.Mixed,
  price: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
    default: null,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  sku: {
    type: String,
    unique: true,
  },
  color: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: null,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Product =
  mongoose.models?.Product || mongoose.model("Product", ProductSchema);

export default Product;
