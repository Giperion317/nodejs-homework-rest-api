const asyncHandler = require("express-async-handler");
const {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  updateStatusContact,
} = require("../servises/contactService");

const getContactsController = asyncHandler(async (req, res) => {
  const { id: owner } = req.user;
  const { contactId: id } = req.params;
  const contacts = await getContacts(id, owner);
  if (!contacts) {
    res.status(400);
    throw new Error("Not found");
  }

  return res.status(200).json({ contacts });
});

const getContactByIdController = asyncHandler(async (req, res) => {
  const { contactId } = req.params;
  const contactById = await getContactById(contactId);

  if (!contactById) {
    res.status(400);
    throw new Error("Not found");
  }
  res.status(200).json({ contactById });
});

const addContactController = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = await addContact({ name, email, phone });
  return res.status(201).json({ newContact });
});

const updateContactController = asyncHandler(async (req, res) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;
  const changedContact = await updateContact(contactId, { name, email, phone });
  return res.status(200).json({ changedContact });
});

const removeContactController = asyncHandler(async (req, res) => {
  const { contactId } = req.params;
  await removeContact(contactId);
  res.status(200).json({ message: "Contact removed" });
});

const updateStatusContactController = asyncHandler(async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const statusContact = await updateStatusContact(contactId, { favorite });
  return res.status(200).json({ statusContact });
});

module.exports = {
  getContactsController,
  getContactByIdController,
  addContactController,
  updateContactController,
  removeContactController,
  updateStatusContactController,
};
