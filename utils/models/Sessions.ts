import mongoose, { Schema } from "mongoose";

const SessionSchema = new Schema({
  user_id: {
    type: String,
    required: true,
    trim: true,
  },
  expires_at: {
    type: Date,
    required: true,
  },
  session_time: {
    type: Date,
    required: true,
  },
  device_info: {
    type: String,
    required: true,
  },
  jwt: {
    type: String,
    required: true,
  },
});

const Session =
  mongoose.models?.Session || mongoose.model("Session", SessionSchema);

export default Session;
