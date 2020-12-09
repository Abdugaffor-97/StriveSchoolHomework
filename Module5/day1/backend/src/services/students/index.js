// Students Portfolio Repo
// You are in charge of creating a Student Portfolio Repo for both Backend and Frontend (Frontend is extra).
// In this first "step" the application should enable the creation, editing, deletion, listing of students.
// Student should have this information:
// - Name
// - Surname
// - ID
// - Email
// - Date of Birth
// //BACKEND

// You are in charge of building the Backend using ExpressJS. The backend should include the following routes:
// GET /students => returns the list of students
// GET /students/123 => returns a single student
// POST /students => create a new student
// PUT /students/123 => edit the student with the given id
// DELETE /students/123 => delete the student with the given id
// The persistence must be granted via file system (es.: Json file with a list of students inside)

// Sidenote: remember to install the cors package with 'npm i cors', to import it with the require statement
// and to use it with 'server.use(cors())'
// [EXTRA] POST /checkEmail => check if another student has the same email. The parameter should be passed in the body.
// It should return true or false.
// It should not be possible to add a new student (with POST /students) if another has the same email.
// [EXTRA] //FRONTEND
// You are in charge of building the Frontend too. Use ReactJS to create an application for managing the students.
// The features for the application are:
// - Add a new Student ([EXTRA]use CheckEmail before sending the post to the backend)
// - Show Students on a list
// - Every Student could be edited or deleted

const express = require("express");
const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid");

const router = express.Router();

// GET /students => returns the list of students

router.get("/", (request, response) => {
  console.log(request);
  const filePath = path.join(__dirname, "students.json");
  const fileAsBuffer = fs.readFileSync(filePath);
  const fileAsString = fileAsBuffer.toString();
  const studentsArray = JSON.parse(fileAsString);

  response.send(studentsArray);
});

// GET /students/123 => returns a single student

router.get("/:id", (req, res) => {
  const filePath = path.join(__dirname, "students.json");
  const fileAsBuffer = fs.readFileSync(filePath);
  const fileAsString = fileAsBuffer.toString();
  const studentsArray = JSON.parse(fileAsString);

  console.log(req.params.id, "id");

  const student = studentsArray.filter(
    (student) => student.id == req.params.id
  );
  // console.log(student);
  console.log(student);

  res.send(student);
});

// 3) POST /students => create a new student
router.post("/", (req, res) => {
  const filePath = path.join(__dirname, "students.json");
  const fileAsBuffer = fs.readFileSync(filePath);
  const fileAsString = fileAsBuffer.toString();
  const studentsArray = JSON.parse(fileAsString);

  // Append new student
  const newStudent = req.body;
  console.log("req", req.body);

  if (studentsArray.find((student) => student.email === newStudent.email)) {
    res.send("This email already registerd");
  } else {
    newStudent.id = uniqid();
    // console.log(newStudent);
    studentsArray.push(newStudent);

    fs.writeFileSync(filePath, JSON.stringify(studentsArray));
    res.status(201).send(newStudent);
  }
});

// 4) PUT /students/123 => edit the student with the given id
router.put("/:id", (req, res) => {
  // console.log(req);
  const filePath = path.join(__dirname, "students.json");
  const fileAsBuffer = fs.readFileSync(filePath);
  const fileAsString = fileAsBuffer.toString();
  const studentsArray = JSON.parse(fileAsString);

  const newStudentsArray = studentsArray.filter(
    (student) => student.id !== req.params.id
  );

  const modifiedStudent = req.body;
  modifiedStudent.id = req.params.id;
  console.log("modifiedStudent", modifiedStudent);
  newStudentsArray.push(modifiedStudent);
  fs.writeFileSync(filePath, JSON.stringify(newStudentsArray));

  res.send(modifiedStudent);
});

// DELETE /students/123 => delete the student with the given id
router.delete("/:id", (req, res) => {
  const filePath = path.join(__dirname, "students.json");
  const fileAsBuffer = fs.readFileSync(filePath);
  const fileAsString = fileAsBuffer.toString();
  const studentsArray = JSON.parse(fileAsString);
  console.log("req.params.id", req.params.id);

  const newStudentsArray = studentsArray.filter(
    (student) => student.id !== req.params.id
  );
  fs.writeFileSync(filePath, JSON.stringify(newStudentsArray));

  res.status(204);
});

module.exports = router;
