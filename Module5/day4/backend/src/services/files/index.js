// 1. Upload single file route
// 2. Upload multiple files route
// 3. Download file route
const express = require("express");
const multer = require("multer");
const { writeFile, createReadStream } = require("fs-extra");
const { join } = require("path");

const router = express.Router();

const uploadMiddleware = multer({});

const sutudentsFolderPath = join(__dirname, "../../../public/img/students");
const projectsFolderPath = join(__dirname, "../../../public/img/projects");

router.post(
  "/uploadPic",
  uploadMiddleware.single("pic"),
  async (req, res, next) => {
    try {
      await writeFile(
        join(sutudentsFolderPath, req.file.originalname),
        req.file.buffer
      );

      res.send("OK");
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

module.exports = router;
