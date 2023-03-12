const { Contacts } = require("../db/contactsModel");

const getContacts = async () => {
  return await Contacts.find({});
};

const getContactById = async (id) => {
  const contactById = await Contacts.findById(id);
  if (!contactById) {
    return res.status(404).json({ message: "Not found" });
  }
  return contactById;
};

const addContact = async (body) => {
  const newContact = new Contacts(body);
  await newContact.save();

  return newContact;
};

const updateContact = async (contactId, body) => {
  const changedContact = await Contacts.findByIdAndUpdate(
    contactId,
    {
      $set: body,
    },
    {
      new: true,
    }
  );
  if (!changedContact) {
    return res.status(404).json({ message: "Not found" });
  }
  return changedContact;
};

const removeContact = async (contactId) => {
  const removedContact = await Contacts.findByIdAndRemove(contactId);
  if (!removedContact) {
    return res.status(404).json({ message: "Not found" });
  }
};

const updateStatusContact = async (contactId, body) => {
  const statusContact = await Contacts.findByIdAndUpdate(
    contactId,
    {
      $set: body,
    },
    {
      new: true,
    }
  );
  if (!statusContact) {
    return res.status(404).json({ message: "Not found" });
  }
  return statusContact;
};

module.exports = {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  updateStatusContact,
};
