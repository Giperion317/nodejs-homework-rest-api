const asyncHandler = require("express-async-handler");
const { updateStatusContactService } = require("../../servises/contacts");

const updateStatusContactController = asyncHandler(async (req, res) => {
  const { contactId } = req.params;
  const { id: owner } = req.user;
  const { favorite } = req.body;
  const statusContact = await updateStatusContactService(contactId, owner, {
    favorite,
  });
  return res.status(200).json({ statusContact });
});

module.exports = updateStatusContactController;
