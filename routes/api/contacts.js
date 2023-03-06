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

const { asyncWrapper } = require("../../helpers/apiHelpers");

router.get("/contacts", asyncWrapper(getContactsController));

router.get("/contacts/:contactId", getContactByIdController);

router.post("/contacts", contactValidate, addContactController);

router.put("/contacts/:contactId", contactValidate, updateContactController);

router.delete("/contacts/:contactId", removeContactController);

router.patch(
  "/contacts/:contactId/favorite",
  statusContactValidate,
  updateStatusContactController
);

module.exports = router;
