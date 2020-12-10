const express = require("express");
const listEndPoints = require("express-list-endpoints");
const { join } = require("path");
const cors = require("cors");
const filesRouters = require("./services/files");
const studentsRouters = require("./services/students");

const {
  notFoundHandler,
  unauthorizedHandler,
  forbiddenHandler,
  catchAllHandler,
} = require("./errorHandling");

const app = express();
const PORT = process.env.PORT || 3001;

publicFolderPath = join(__dirname, "../public");

app.use(cors());
app.use(express.json());
app.use("/files", filesRouters);
app.use("/students", studentsRouters);

app.use(notFoundHandler);
app.use(unauthorizedHandler);
app.use(forbiddenHandler);
app.use(catchAllHandler);

console.log(listEndPoints(app));

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
