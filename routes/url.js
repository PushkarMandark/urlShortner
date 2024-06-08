const express = require("express");
const {
  handleGenerateNewShortUrl,
  handleGetAnalytics,
} = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenerateNewShortUrl);
router.get("/:shortId", handleGetAnalytics);

module.exports = router;
