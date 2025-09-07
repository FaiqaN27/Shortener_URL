const shortid = require('shortid');
const URL = require('../models/url')

async function handleCreateShortID(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }

  const shortID = shortid();
  const result = await URL.create({
    shortID: shortID,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  })
  const allUrls = await URL.find({ createdBy: req.user._id });
  return res.render("home", {
    id: shortID,
    urls: allUrls
  });
}

async function handleRedirectUrl(req, res) {
  const shortID = req.params.id;
  const entry = await URL.findOneAndUpdate({
    shortID //passing value so should be the same name as in DB
  }, {
    $push: {
      visitHistory: {
        timeStamps: Date.now()
      }
    }
  });

  return res.redirect(entry.redirectUrl);
}

async function handleViewAnalytics(req, res) {
  const shortID = req.params.id;
  const result = await URL.findOne({ shortID });

  return res.json({
    Total_Clicks: result.visitHistory.length,
    Analytics: result.visitHistory
  })
}

module.exports = {
  handleCreateShortID,
  handleRedirectUrl,
  handleViewAnalytics
}