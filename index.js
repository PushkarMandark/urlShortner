const express = require("express");
const urlRouter = require("./routes/url");
const userRoute = require("./routes/user.js");

const { connectToMongoDB } = require("./connect");
const URL = require("./models/url");
const app = express();
const PORT = 8001;

app.use(express.json()); // Middleware to parse JSON request bodies

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/url", urlRouter);
app.get("url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entery = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entery?.redirectURL);
});
app.use("/url/analytics", urlRouter);
app.use("/createUser", userRoute);

app.listen(PORT, () => {
  console.log("Server started at port =", PORT);
});
