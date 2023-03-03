const tryCatchWrapper = require("../helpers/tryCatchWraper");
const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../models/contacts");

const controlerGetContact = async (req, res) => {
  const contacts = await tryCatchWrapper(listContacts());
  return res.status(200).json({ contacts });
};

const controlerContactById = async (req, res) => {
  const contactById = await tryCatchWrapper(
    getContactById(req.params.contactId)
  );
  return contactById
    ? res.status(200).json({ contactById })
    : res.status(404).json({ message: "Not found" });
};

const controleraddContact = async (req, res) => {
  const newContact = await tryCatchWrapper(addContact(req.body));

  return res.status(201).json({ newContact });
};

const controlerUpdateContact = async (req, res) => {
  changedContact = await tryCatchWrapper(
    updateContact(req.params.contactId, req.body)
  );
  return changedContact
    ? res.status(200).json({ changedContact })
    : res.status(404).json({ message: "Not found" });
};

const controlerRemoveContact = async (req, res) => {
  const removedContact = await tryCatchWrapper(
    removeContact(req.params.contactId)
  );
  return removedContact
    ? res.status(200).json({ message: "contact deleted" })
    : res.status(404).json({ message: "Not found" });
};

module.exports = {
  controlerGetContact,
  controlerContactById,
  controleraddContact,
  controlerUpdateContact,
  controlerRemoveContact,
};
