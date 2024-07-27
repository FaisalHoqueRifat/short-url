const express = require("express");
const {HandleCreateID, HandleGetAnalytics} = require("../controllers/url");

const router = express.Router();

router.post("/", HandleCreateID);
router.get("/analytics/:id", HandleGetAnalytics);

module.exports = router