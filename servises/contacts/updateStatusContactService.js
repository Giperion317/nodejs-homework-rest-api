const { Contacts } = require("../../models/contactsModel");

const updateStatusContactService = async (contactId, user, body) => {
  const statusContact = await Contacts.findByIdAndUpdate(
    { _id: contactId, owner: user },
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

module.exports = updateStatusContactService;
