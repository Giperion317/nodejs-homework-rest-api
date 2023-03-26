const asyncHandler = require("express-async-handler");
const { updateContactService } = require("../../servises/contacts");

const updateContactController = asyncHandler(async (req, res) => {
  const { contactId } = req.params;
  const { id: owner } = req.user;
  const { name, email, phone } = req.body;
  const changedContact = await updateContactService(contactId, owner, {
    name,
    email,
    phone,
  });
  if (!changedContact) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json({ changedContact });
});

module.exports = updateContactController;
