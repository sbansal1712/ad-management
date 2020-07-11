const Mst_Ads = require("../models/ads");

exports.getAllAds = async (req, res) => {
  try {
    var result = await Mst_Ads.find().sort({ CPI: -1 });
    return res.send(result);
  } catch (err) {
    return res.send(err);
  }
};
exports.addNewAd = async (req, res) => {
  try {
    console.log(req.body);
    var ad = new Mst_Ads(req.body);
    var result = await ad.save();
    return res.send(result);
  } catch (err) {
    return res.send(err);
  }
};
