const { Contacts } = require("../../models/contactsModel");

const getContactsService = async (user) => {
  return await Contacts.find({ owner: user });
};

module.exports = getContactsService;
