const express = require("express");
const router = express.Router();

const { authValidate } = require("../../middlewares/validation");
const auth = require("../../middlewares/auth");
const {
  registerController,
  loginController,
  logoutController,
  currentUserControler,
  subscriptionController,
} = require("../../controllers/auth");

router.post("/register", authValidate, registerController);
router.post("/login", loginController);
router.get("/logout", auth, logoutController);
router.get("/current", auth, currentUserControler);
router.patch("/subscription", auth, subscriptionController);

module.exports = router;
