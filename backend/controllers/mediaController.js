const cloudinary = require("cloudinary");

const handleUpload = async (file) => {
  const res = await cloudinary.v2.uploader.upload(file, {
    resource_type: "image",
  });
  return res;
};