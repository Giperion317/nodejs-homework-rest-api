const asyncHandler = require("express-async-handler");
const { addContactService } = require("../../servises/contacts");

const addContactController = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  const { id: owner } = req.user;

  const newContact = await addContactService({ name, email, phone, owner });
  return res.status(201).json({ newContact });
});

module.exports = addContactController;
