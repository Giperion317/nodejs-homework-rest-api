const express = require("express");
const router = express.Router();

const {
  getContactsController,
  getContactByIdController,
  addContactController,
  updateContactController,
  removeContactController,
  updateStatusContactController,
} = require("../../controllers/contacts");

const {
  contactValidate,
  statusContactValidate,
} = require("../../middlewares/validation");

const auth = require("../../middlewares/auth");

router.get("/", auth, getContactsController);

router.get("/:contactId", auth, getContactByIdController);

router.post("/", auth, contactValidate, addContactController);

router.put("/:contactId", auth, contactValidate, updateContactController);

router.delete("/:contactId", auth, removeContactController);

router.patch(
  "/:contactId/favorite",
  auth,
  statusContactValidate,
  updateStatusContactController
);

module.exports = router;
