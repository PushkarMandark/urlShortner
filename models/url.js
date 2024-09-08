const mongoose = require("mongoose");
//schema
const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [{ timeStamp: { type: Number } }],
  },
  { timestamps: true } // Correct option name is timestamps
);

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
