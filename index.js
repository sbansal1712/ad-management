const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
require("./database/connect_mongo");
const routes = require("./routes/route");

express()
  .use(express.static(path.join(__dirname, "public")))
  .use(routes)
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
