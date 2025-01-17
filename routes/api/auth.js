const express = require("express");
const router = express.Router();

const {
  authValidate,
  verifyEmailValidate,
} = require("../../middlewares/validation");
const auth = require("../../middlewares/auth");
const upload = require("../../middlewares/upload");
const {
  registerController,
  loginController,
  logoutController,
  currentUserControler,
  subscriptionController,
  avatarUploadController,
  verifyController,
  resendEmailController,
} = require("../../controllers/auth");

router.post("/register", authValidate, registerController);
router.get("verify/:verificationToken", verifyController);
router.post("/verify", verifyEmailValidate, resendEmailController);
router.post("/login", loginController);
router.get("/logout", auth, logoutController);
router.get("/current", auth, currentUserControler);
router.patch("/subscription", auth, subscriptionController);
router.patch("/avatars", auth, upload.single("avatar"), avatarUploadController);

module.exports = router;
