const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");


router.get("/", (req, res) => {
  res.redirect("home");
});

router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard", { text: "This is text" });
});

router.post("/home", authenticateUser, (req, res) => {
  console.log("home private route");
  res.status(202).send("Private Protected Route - Home");
});

router.post("/verifyToken", (req, res) => {
  const phone = req.body.phone;
  const hash = req.body.hash;
  const otp = req.body.otp;
  let [hashValue, expires] = hash.split(".");

  let now = Date.now();
  if (now > parseInt(expires)) {
    return res.status(504).send({ msg: "Timeout. Please try again" });
  }
  let data = `${phone}.${otp}.${expires}`;
  let newCalculatedHash = crypto
    .createHmac("sha256", smsKey)
    .update(data)
    .digest("hex");
  if (newCalculatedHash === hashValue) {
    console.log("user confirmed");
    const accessToken = jwt.sign({ data: phone }, JWT_AUTH_TOKEN, {
      expiresIn: "30s",
    });
    const refreshToken = jwt.sign({ data: phone }, JWT_REFRESH_TOKEN, {
      expiresIn: "1y",
    });
    refreshTokens.push(refreshToken);
    res
      .status(202)
      .cookie("accessToken", accessToken, {
        expires: new Date(new Date().getTime() + 30 * 1000),
        sameSite: "strict",
        httpOnly: true,
      })
      .cookie("refreshToken", refreshToken, {
        expires: new Date(new Date().getTime() + 31557600000),
        sameSite: "strict",
        httpOnly: true,
      })
      .cookie("authSession", true, {
        expires: new Date(new Date().getTime() + 30 * 1000),
        sameSite: "strict",
      })
      .cookie("refreshTokenID", true, {
        expires: new Date(new Date().getTime() + 31557600000),
        sameSite: "strict",
      })
      .send({ msg: "Device verified" });
  } else {
    console.log("not authenticated");
    return res.status(400).send({ verification: false, msg: "Incorrect OTP" });
  }
});

async function authenticateUser(req, res, next) {
  const accessToken = req.cookies.accessToken;
  jwt.verify(accessToken, JWT_AUTH_TOKEN, async (err, phone) => {
    if (phone) {
      req.phone = phone;
      next();
    } else if (err.message === "TokenExpiredError") {
      return res
        .status(403)
        .send({ success: false, msg: "Access Token expired" });
    } else {
      console.error(err);
      res.status(403).send({ err, msg: "User not authenticated" });
    }
  });
}

router.post("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res
      .status(403)
      .send({ message: "Refresh token not found, login again" });
  if (!refreshTokens.includes(refreshToken))
    return res
      .status(403)
      .send({ message: "Refresh token blocked, login again" });

  jwt.verify(refreshToken, JWT_REFRESH_TOKEN, (err, phone) => {
    if (!err) {
      const accessToken = jwt.sign({ data: phone }, JWT_AUTH_TOKEN, {
        expiresIn: "30s",
      });
      return res
        .status(200)
        .cookie("accessToken", accessToken, {
          expires: new Date(new Date().getTime() + 30 * 1000),
          sameSite: "strict",
          httpOnly: true,
        })
        .cookie("authSession", true, {
          expires: new Date(new Date().getTime() + 30 * 1000),
          sameSite: "strict",
        })
        .send({ previousSessionExpired: true, success: true });
    } else {
      return res.status(403).send({
        success: false,
        msg: "Invalid refresh token",
      });
    }
  });
});

router.get("/logout", (req, res) => {
  res
    .clearCookie("refreshToken")
    .clearCookie("accessToken")
    .clearCookie("authSession")
    .clearCookie("refreshTokenID")
    .send("logout");
});

//////////////////////////////////////////////////////////////////////////

// router.route('/signup')
//     .get(sessionChecker, (req, res) => {
//         //res.sendFile(__dirname + '/public/signup.html');
//         res.render('signup');
//     })
//     .post((req, res) => {
//         User.create({
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//             gender: req.body.gender,
//             date_of_birth:req.body.date_of_birth,
//             address:req.body.address

//         })
//         .then(user => {
//             req.session.user = user.dataValues;
//             res.render('dashboard',{
//                 "token" :  createToken(req),
//                 "user" : req.session.user
//              });
//         })
//         .catch(error => {
//             res.render('signup');
//         });
//     });

// // route for user Login
// router.route('/login')
//     .get(sessionChecker, (req, res) => {
//         res.render('login');
//     })
//     .post((req, res) => {
//         var email = req.body.email,
//             password = req.body.password;

//         User.findOne({ where: { email: email } }).then(function (user) {
//             if (!user) {
//                 res.redirect('/login');;
//             } else if (!user.validPassword(password)) {
//                 res.redirect('/login');;
//             } else {
//             req.session.user = user.dataValues;
//             res.render('dashboard',{
//                 "token" :  createToken(req),
//                 "user" : req.session.user
//              });
//         }
//     });
// });

// router.get("/login", (req, res) => {
//   res.render("login");
// });
// router.get("/signup", (req, res) => {
//   res.render("signup");
// });

module.exports = router;
