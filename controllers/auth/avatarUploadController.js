const asyncHandler = require("express-async-handler");
const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const { avatarUploadService } = require("../../servises/auth");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const avatarUploadController = asyncHandler(async (req, res) => {
  const { id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const extension = originalname.split(".").pop();
  const filename = `${id}.${extension}`;
  const resultUpload = await Jimp.read(tempUpload);
  await resultUpload.resize(250, 250).write(path.join(avatarsDir, filename));
  const avatarURL = path.join("avatars", filename);
  fs.unlink(tempUpload);
  await avatarUploadService(id, avatarURL);

  return res.status(200).json({ data: { avatarURL } });
});

module.exports = avatarUploadController;
