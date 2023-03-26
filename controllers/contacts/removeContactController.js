const asyncHandler = require("express-async-handler");
const { removeContactServise } = require("../../servises/contacts");

const removeContactController = asyncHandler(async (req, res) => {
  const { contactId } = req.params;
  const { id: owner } = req.user;
  await removeContactServise(contactId, owner);
  res.status(200).json({ message: "Contact removed" });
});

module.exports = removeContactController;
