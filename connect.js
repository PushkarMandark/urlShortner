const mongoose = require("mongoose");

async function connectToMongoDB(url) {
  mongoose.set("debug", true);
  try {
    await mongoose.connect(url).then(() => {
      console.log("MongoDB Connected");
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

module.exports = {
  connectToMongoDB,
};
