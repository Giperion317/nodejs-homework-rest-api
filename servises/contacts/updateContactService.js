const { Contacts } = require("../../models/contactsModel");

const updateContactService = async (contactId, user, body) => {
  const changedContact = await Contacts.findByIdAndUpdate(
    { _id: contactId, owner: user },
    body,
    {
      new: true,
    }
  );
  return changedContact;
};

module.exports = updateContactService;
