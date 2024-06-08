const generateShortId = require("ssid");
const URL = require("../models/url");

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = generateShortId(6);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  console.log("req.params", req);
  if (!shortId) return res.status(400).json({ error: "id is required" });
  const result = await URL.findOne({ shortId });
  if (!result) return res.status(400).json({ error: "shortID is not correct" });
  return res.json({
    totalClicks: result.visitHistory.length,
    result: result.visitHistory,
  });
}

module.exports = { handleGenerateNewShortUrl, handleGetAnalytics };
