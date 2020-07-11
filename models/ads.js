const mongoose = require("mongoose");

const AdSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    CPI: { type: String },
  },
  { collection: "Mst_Ads" }
);

const Mst_Ads = mongoose.model("Mst_Ads", AdSchema);
module.exports = Mst_Ads;
