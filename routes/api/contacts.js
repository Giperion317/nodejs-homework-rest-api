const express = require("express");
const router = express.Router();

const {
  controlerGetContact,
  controlerContactById,
  controleraddContact,
  controlerUpdateContact,
  controlerRemoveContact,
} = require("../../controllers/contactController");

const { contactValidate } = require("../../middlewares/validation");

router.get("/", controlerGetContact);

router.get("/:contactId", controlerContactById);

router.post("/", contactValidate, controleraddContact);

router.put("/:contactId", contactValidate, controlerUpdateContact);

router.delete("/:contactId", controlerRemoveContact);

module.exports = router;
