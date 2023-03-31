const { Contacts } = require("../../models/contactsModel");

const getContactByIdService = async (contactId, user) => {
  const contactById = await Contacts.find({ _id: contactId, owner: user });
  if (!contactById) {
    return res.status(404).json({
      message: "Not found",
    });
  }
  return contactById;
};

module.exports = getContactByIdService;
