const express = require("express");

const router = new express.Router();

const adController = require("../controllers/ad");
// Middleware function to validate the access token and authorize the request

router.get("/getAllAds", adController.getAllAds);
router.post("/addNewAd", adController.addNewAd);

module.exports = router;
