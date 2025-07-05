const express = require("express");
const router = express.Router();
const {
  handleCreateShortID,
  handleRedirectUrl,
  handleViewAnalytics,
} = require("../controllers/url");

router.post("/", handleCreateShortID);
router.get("/:id", handleRedirectUrl);
router.get("/analytics/:id", handleViewAnalytics);

module.exports = router;
