const express = require("express");
//const { config } = require("node:process");
const app = express();
const port = process.env.PORT || 3000 ;
const router = require("./route/router");

app.use(express.static("jquery"));
app.use(express.static("uikit"));
// Load Image
// app.use("/img", express.static(__dirname + "img/logo"));
app.use(express.static("img"));

app.use(express.static("javascript"));
app.use(express.static("javascript/nishkritih/page"));
app.use(express.static("javascript/nishkritih/control"));


// Set Views
app.set("views", "./views/pages");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use("/", router);

// Listen on port 3000
app.listen(port, () => {
  console.log(`Listening on port  ${port}`);
});
