import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  fName: {
    type: String,
    // required: [true,'fname is required']
  },
  lName: {
    type: String,
    // required: [true,'fname is required']
  },
  username: {
    type: String,
    // required: [true,'fname is required']
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  tel: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models?.User || mongoose.model("Users", UserSchema);

export default User;
