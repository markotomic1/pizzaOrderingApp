import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error("Please define mongodb uri envirovment variable inside .env");
}
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    cached.promise = mongoose
      .connect(MONGO_URL, opts)
      .then((mongoose) => {
        return mongoose;
      })
      .catch((err) => console.log(err));
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
export default dbConnect;
