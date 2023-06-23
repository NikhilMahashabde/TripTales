// we are using a object relationship mapper (ORM) called mongoose which handles database connection,
// once we have a connection, a model for a collection is set up, and an object is exported which is then used to
// modify data straight onto the database

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.error(err);
  }
};

export { connectDB };
