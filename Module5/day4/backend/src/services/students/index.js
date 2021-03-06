const express = require("express");
const path = require("path");
const uniqid = require("uniqid");
const { readDB, writeDB } = require("../utilities");
const { check, validationResult } = require("express-validator");
const multer = require("multer");
const { writeFile } = require("fs-extra");

const upload = multer({});

const router = express.Router();

const studentsFilePath = path.join(__dirname, "students.json");
const studentsImgFilePath = path.join(
  __dirname,
  "../../../public/img/students"
);

router.post("/upload/:id", upload.single("img"), async (req, res, next) => {
  try {
    console.log(req.file);
    await writeFile(
      path.join(
        studentsImgFilePath,
        req.params.id + "." + req.file.originalname.split(".")[1]
      ),
      req.file.buffer
    );
    res.send("Student img uploaded");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const studentsDB = await readDB(studentsFilePath);
    if (req.query && req.query.name) {
      const filteredStudents = studentsDB.filter(
        (student) =>
          student.hasOwnProperty("name") &&
          student.name.toLowerCase() === req.query.name.toLowerCase()
      );
      res.send(filteredStudents);
    } else {
      res.send(studentsDB);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const studentsDB = await readDB(studentsFilePath);
    const user = studentsDB.filter((user) => user.id === req.params.id);
    if (user.length > 0) {
      res.send(user[0]);
    } else {
      const err = new Error();
      err.httpStatusCode = 404;
      next(err);
    }
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  [
    check("name")
      .isLength({ min: 4 })
      .withMessage("No way! Name too short!")
      .exists()
      .withMessage("Insert a name please!"),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const err = new Error();
        err.message = errors;
        err.httpStatusCode = 400;
        next(err);
      } else {
        const studentsDB = await readDB(studentsFilePath);
        const newUser = {
          ...req.body,
          id: uniqid(),
          modifiedAt: new Date(),
        };

        studentsDB.push(newUser);

        await writeDB(studentsFilePath, studentsDB);

        res.status(201).send({ id: newUser.ID });
      }
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", async (req, res, next) => {
  try {
    const studentsDB = await readDB(studentsFilePath);
    const newDb = studentsDB.filter((student) => student.id !== req.params.id);
    await writeDB(studentsFilePath, newDb);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const studentsDB = await readDB(studentsFilePath);
    const newDb = studentsDB.filter((student) => student.id !== req.params.id);

    const modifiedStudent = {
      ...req.body,
      id: req.params.id,
      modifiedAt: new Date(),
    };

    newDb.push(modifiedStudent);
    await writeDB(studentsFilePath, newDb);

    res.send({ id: modifiedStudent.id });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
