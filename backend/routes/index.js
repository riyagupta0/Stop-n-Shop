const express = require("express")

const router = express.Router()

const userSignupController = require("../controller/userSignup")
const userSigninController = require("../controller/userSignin")
const userDetailsController = require("../controller/userDetail")
const authToken = require("../middleware/authToken")

router.post("/signup", userSignupController )
router.post("/signin", userSigninController)
router.get("/user-details",authToken,  userDetailsController)

module.exports = router;
