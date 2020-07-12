const mongoose = require("mongoose");

const AdSchema = new mongoose.Schema(
  {
    Title: { type: String },
    Description: { type: String },
    CPI: { type: Number },
    NumberofClicks: { type: Number, default: 0 },
    TotalCost: { type: Number },
    Website: { type: String },
  },
  { collection: "Mst_Ads" }
);
AdSchema.pre("save", function (next) {
  this.TotalCost = this.CPI * this.NumberofClicks;
  next();
});

const Mst_Ads = mongoose.model("Mst_Ads", AdSchema);
module.exports = Mst_Ads;
