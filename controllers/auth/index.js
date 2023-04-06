const registerController = require("./registerController");
const loginController = require("./loginController");
const logoutController = require("./logoutController");
const currentUserControler = require("./currentUserControler");
const subscriptionController = require("./subscriptionController");
const avatarUploadController = require("./avatarUploadController");
const verifyController = require("./verifyController");
const resendEmailController = require("./resendEmailController");

module.exports = {
  registerController,
  loginController,
  logoutController,
  currentUserControler,
  subscriptionController,
  avatarUploadController,
  verifyController,
  resendEmailController,
};
