const Mst_Ads = require("../models/ads");

exports.getAllAds = async (req, res) => {
  try {
    var result = await Mst_Ads.find({}, {}, { limit: 2 }).sort({ CPI: -1 });
    return res.send(result);
  } catch (err) {
    return res.send(err);
  }
};
exports.addNewAd = async (req, res) => {
  try {
    var ad = new Mst_Ads(req.body);
    var result = await ad.save();
    return res.send(result);
  } catch (err) {
    return res.send(err);
  }
};

exports.recordClicks = async (req, res) => {
  try {
    var ad = await Mst_Ads.findById(req.query.id).exec();

    ad.NumberofClicks += 1;
    var result = await ad.save();
    return res.send(result);
  } catch (err) {
    return res.send(err);
  }
};
