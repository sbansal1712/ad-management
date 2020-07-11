const mongoose = require("mongoose");

const AdSchema = new mongoose.Schema(
  {
    Name: "",
    Description: "",
    CPI: "",
  },
  { collection: "Mst_Ads" }
);

const Mst_Ads = mongoose.model("Mst_Ads", AdSchema);
module.exports = Mst_Ads;
