const express = require("express");
//const { config } = require("node:process");
const app = express();
const port = process.env.PORT || 3000 ;
const router = require("./route/router");

// Static Files
// app.use(express.static("img"));

// app.use(express.static("javascript/nishkritih"));
// app.use(express.static("javascript"));


app.use(express.static("jquery"));
app.use(express.static("uikit"));
// Load Image
// app.use("/img", express.static(__dirname + "img/logo"));
app.use(express.static("img"));

app.use(express.static("javascript"));
app.use(express.static("javascript/nishkritih/page"));

// app.use(express.static("jquery"));
// app.use(express.static("jquery"));





// // Load Css
// app.use("/css", express.static(__dirname + "uikit/css"));
// app.use("/css", express.static(__dirname + "jquery/css"));

// // Load Js
// app.use("/js", express.static(__dirname + "jquery/js"));
// app.use("/js", express.static(__dirname + "uikit/js"));
// app.use("/js", express.static(__dirname + "javascript/nishkritih.js"));
// app.use("/js", express.static(__dirname + "javascript/nishkritih/page"));

// app.use('/js', express.static(__dirname + 'javascript/nishkritih.js'))
// app.use(express.static('javascript/nishkritih/page'));
// app.use('/js', express.static(__dirname + 'javascript/nishkritih/page/n.page.login.js'))
// app.use('/js', express.static(__dirname + 'javascript/nishkritih/page/n.page.register.js'))
// app.use('/css', express.static(__dirname + 'jquery/chosen.css'))
// app.use('/js', express.static(__dirname + 'jquery/chosen.jquery.js'))
// app.use('/js', express.static(__dirname + 'jquery/jquery-3.4.1.js'))
// app.use('/js', express.static(__dirname + 'jquery/jquery-3.4.1.min.js'))
// app.use('/js', express.static(__dirname + 'uikit/uikit-icons.js'))
// app.use('/js', express.static(__dirname + 'uikit/uikit-icons.min.js'))
// app.use('/js', express.static(__dirname + 'uikit/uikit.js'))
// app.use('/js', express.static(__dirname + 'uikit/uikit.min.js'))
// app.use('/css', express.static(__dirname + 'uikit/uikit-rtl.css'))
// app.use('/css', express.static(__dirname + 'uikit/uikit-rtl.min.css'))
// app.use('/css', express.static(__dirname + 'uikit/uikit.min.css'))
// app.use('/css', express.static(__dirname + 'uikit/uikit.theme.css'))
// app.use('/css', express.static(__dirname + 'uikit/uikit.css'))

// Set Views
app.set("views", "./views/pages");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.use("/", router);



// Listen on port 3000
app.listen(port, () => {
  console.log(`Listening on port  ${port}`);
});
