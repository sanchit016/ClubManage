const express = require("express");
const mediaController = require("../controllers/mediaControllers");

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
})

const upload = multer({ storage: storage })

mediaRouter = express.Router();
userRouter.post("/upload-image", upload.single('image'), mediaController.uploadImage);

module.exports = userRouter;