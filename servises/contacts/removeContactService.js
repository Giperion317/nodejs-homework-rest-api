const { Contacts } = require("../../models/contactsModel");

const removeContactServise = async (contactId, user) => {
  const removedContact = await Contacts.findByIdAndRemove({
    _id: contactId,
    owner: user,
  });
  if (!removedContact) {
    return res.status(404).json({ message: "Not found" });
  }
};

module.exports = removeContactServise;
