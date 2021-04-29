const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("home");
});

router.get("/home", (req, res) => {
  res.render("home");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard", {text: "This is text"});
});
router.get("/oxygensupplier", (req, res) => {
  res.render("supplierModal");
});

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
