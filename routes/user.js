const express = require("express");
const { handleUserCreate } = require("../controllers/user");

const router = express.Router();

router.post("/", handleUserCreate);
module.exports = router;
