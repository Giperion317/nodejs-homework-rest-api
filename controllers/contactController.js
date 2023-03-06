const {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  updateStatusContact,
} = require("../servises/contactService");

const getContactsController = async (req, res) => {
  const contacts = await getContacts();
  return res.status(200).json({ contacts });
};

const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const contactById = await getContactById(contactId);
  return res.status(200).json({ contactById });
};

const addContactController = async (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = await addContact({ name, email, phone });
  return res.status(201).json({ newContact });
};

const updateContactController = async (req, res) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;
  const changedContact = await updateContact(contactId, { name, email, phone });
  return res.status(200).json({ changedContact });
};

const removeContactController = async (req, res) => {
  const { contactId } = req.params;
  await removeContact(contactId);
  res.status(200).json({ message: "Contact removed" });
};

const updateStatusContactController = async (req, res) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const statusContact = await updateStatusContact(contactId, { favorite });
  return res.status(200).json({ statusContact });
};

module.exports = {
  getContactsController,
  getContactByIdController,
  addContactController,
  updateContactController,
  removeContactController,
  updateStatusContactController,
};
