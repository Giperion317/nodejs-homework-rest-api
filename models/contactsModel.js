const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
});

const Contacts = mongoose.model("contacts", contactSchema);

module.exports = {
  Contacts,
};
