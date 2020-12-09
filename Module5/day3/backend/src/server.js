const express = require("express");
const cors = require("cors");
// const listEndpoints = require("express-list-endpoints");
const studentsRouter = require("./services/students");
// const reposRouter = require("./services/repos");

const {
  notFoundHandler,
  unauthorizedHandler,
  forbiddenHandler,
  catchAllHandler,
} = require("./errorHandling");

// Define server
const server = express();
const PORT = process.env.PORT || 3001;

// const loggerMiddleware = (req, res, next) => {
//   console.log(`Logged ${req.url} ${req.method} -->${new Date()}`);
// };

server.use(cors);
server.use(express.json());
// server.use(loggerMiddleware);

server.use("/students", studentsRouter);
// server.use("/repos", reposRouter);

server.use(notFoundHandler);
server.use(unauthorizedHandler);
server.use(forbiddenHandler);
server.use(catchAllHandler);

// console.log(listEndpoints);

server.listen(PORT, () => {
  console.log("Server running at: http://localhost:" + PORT);
});
