const { Contacts } = require("../../models/contactsModel");

const addContactService = async (body) => {
  return await Contacts.create(body);
};

module.exports = addContactService;
