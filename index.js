const express = require("express");
const path = require("path");
var cors = require("cors");
const PORT = process.env.PORT || 5000;
var app = express();
const routes = require("./routes/route");

require("./database/connect_mongo");

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

var corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders:
    "Content-Type,X-Requested-With,authorization,accesstoken, sessionid",
};
app.use(routes);
app.use(cors(corsOptions));
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
