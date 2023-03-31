const { Users } = require("../../models/userModel");

const avatarUploadService = async (id, avatarURL) => {
  const data = await Users.findByIdAndUpdate(id, { avatarURL });
  return data;
};
module.exports = avatarUploadService;
