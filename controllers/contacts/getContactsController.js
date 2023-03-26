const asyncHandler = require("express-async-handler");
const { getContactsService } = require("../../servises/contacts");

const getContactsController = asyncHandler(async (req, res) => {
  const { id: owner } = req.user;
  const contacts = await getContactsService(owner);
  if (!contacts) {
    res.status(400);
    throw new Error("Not found");
  }

  return res.status(200).json({ contacts });
});

module.exports = getContactsController;
