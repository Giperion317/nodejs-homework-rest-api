const asyncHandler = require("express-async-handler");
const { getContactByIdService } = require("../../servises/contacts");

const getContactByIdController = asyncHandler(async (req, res) => {
  const { id: owner } = req.user;
  const { contactId: id } = req.params;
  const contactById = await getContactByIdService(id, owner);

  if (contactById.length === 0) {
    res.status(404);
    throw new Error("Not found");
  }
  res.status(200).json({ contactById });
});

module.exports = getContactByIdController;
