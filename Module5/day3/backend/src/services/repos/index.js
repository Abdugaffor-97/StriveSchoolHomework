const express = require("express");
const { check, validationResult } = require("express-validator");
const uniqid = require("uniqid");
const readFile = require("../genericFunctions");
const fs = require("fs");
const path = require("path");

// Define router
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    reposDB = readFile("repos.json");
    if (req.query && req.name) {
      const filteredRepo = reposDB.find(
        (repo) => repo.name.toLowerCase() === req.query.name.toLowerCase()
      );
      res.send(filteredRepo);
    } else {
      res.send(reposDB);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    reposDB = readFile("repos.json");
    const filteredRepo = reposDB.find((repo) => repo.id === req.params.id);

    if (filteredRepo.length) {
      res.send(filteredRepo);
    } else {
      const err = new Error();
      res.send(err);
    }
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  [check("name").exists().withMessage("Insert a name")],
  (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const err = new Error();
        err.message = errors;
        err.httpStatusCode = 400;
        next(err);
      } else {
        const reposDB = readFile("repos.json");
        const newRepo = {
          ...req.body,
          id: uniqid(),
          modifiedAt: new Date(),
        };

        reposDB.push(newRepo);
        fs.writeFileSync(
          path.join(__dirname, "repos.json"),
          JSON.stringify(reposDB)
        );
        res.status(201).send({ id: newRepo.id });
      }
    } catch (error) {
      next(error);
    }
  }
);

router.put("/:id", (req, res, next) => {
  try {
    reposDB = readFile("repos.json");
    const newReposDB = reposDB.filter((repo) => repo.id !== req.params.id);
    const modifiedRepo = {
      ...req.body,
      id: req.params.id,
      modifiedAt: new Date(),
    };

    newReposDB.push(modifiedRepo);
    fs.writeFileSync(
      path.join(__dirname, "repos.json"),
      JSON.stringify(newReposDB)
    );
    res.send({ id: modifiedRepo.id });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    reposDB = readFile("repos.json");
    const newReposDB = reposDB.filter((repo) => repo.id !== req.params.id);
    fs.writeFileSync(
      path.join(__dirname, "repos.json"),
      JSON.stringify(newReposDB)
    );
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
