// import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
// const options = {};

// let client;
// let clientPromise;

if (!uri) {
  console.log("please add your MONGODB_URI environment variable!");
}

export async function dbConnect() {
  const opts = {
    bufferCommands: false,
  };
  if (process.env.NODE_ENV === "development") {
    if (uri)
      await mongoose.connect(uri, opts).then((mongoose) => {
        return mongoose;
      }).catch(error => {
        console.log('Error while connection to mongo db!!! ', error)
      });
  }
}
