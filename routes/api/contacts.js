const express = require("express");
const router = express.Router();

const {
  getContactsController,
  getContactByIdController,
  addContactController,
  updateContactController,
  removeContactController,
  updateStatusContactController,
} = require("../../controllers/contactController");

const {
  contactValidate,
  statusContactValidate,
} = require("../../middlewares/validation");

const auth = require("../../middlewares/auth");

router.get("/", auth, getContactsController);

router.get("/:contactId", getContactByIdController);

router.post("/", contactValidate, addContactController);

router.put("/:contactId", contactValidate, updateContactController);

router.delete("/:contactId", removeContactController);

router.patch(
  "/:contactId/favorite",
  statusContactValidate,
  updateStatusContactController
);

module.exports = router;
