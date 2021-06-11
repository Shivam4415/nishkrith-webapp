const express = require("express");
const cookieParser = require("cookie-parser");
//const { config } = require("node:process");
const app = express();
const router = require("./route/router");
const config = require("./config");

app.use(express.static("jquery"));
app.use(express.static("uikit"));
// Load Image
// app.use("/img", express.static(__dirname + "img/logo"));
app.use(express.static("img"));

app.use(express.static("javascript"));
app.use(express.static("javascript/nishkritih/page"));
app.use(express.static("javascript/nishkritih/control"));
app.use(cookieParser());
app.use(express.json());
// Set Views
app.set("views", "./views/pages");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use("/", router);

// Listen on port 3000
app.listen(config.server.port, () => {
  console.log(`Listening on port  ${config.server.port}`);
});
