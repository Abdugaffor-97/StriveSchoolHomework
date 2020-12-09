const express = require("express");
const cors = require("cors");
const studensRouts = require("./services/students");

const server = express();
const port = 3001;

server.use(cors());
server.use(express.json());

server.use("/students", studensRouts);

server.listen(port, () => {
  console.log("Server is running on port:", port);
});
