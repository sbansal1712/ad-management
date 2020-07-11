const Mst_Ads = require("../models/ads");

exports.getAllAds = async (req, res) => {
  try {
    var result = await Mst_Ads.find();
    return res.send(result);
  } catch (err) {
    return res.send(err);
  }
};
