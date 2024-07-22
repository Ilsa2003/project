// const express = require("express")
// const router = express.Router();
// const ApplicationRoute = require("./ApplicationRoute")
// const intern = require("./internshipRout")
// const job = require("./jobRoute")
// const admin = require("./admin")
// const avatarRoute = require('./routes/avatarRoute');



// router.get("/", (req, res) => {
//     res.send("the is backend")
// })
// router.use('/application', ApplicationRoute);
// router.use('/internship', intern);
// router.use('/job', job);
// router.use('/admin', admin);
// app.use('/api/avatar', avatarRoute); // Avatar routes


// module.exports = router;

const express = require("express");
const router = express.Router();
const ApplicationRoute = require("./applicationRoute");
const intern = require("./internshipRout");
const job = require("./jobRoute");
const admin = require("./admin");
const avatarRoute = require("./avatarRoute");

router.get("/", (req, res) => {
    res.send("This is the backend");
});

router.use('/application', ApplicationRoute);
router.use('/internship', intern);
router.use('/job', job);
router.use('/admin', admin);
router.use('/avatar', avatarRoute); // Avatar routes

module.exports = router;
