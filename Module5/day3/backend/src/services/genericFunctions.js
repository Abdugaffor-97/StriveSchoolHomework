const fs = require("fs");
const path = require("path");

const fileReader = (fileName) => {
  const buff = fs.readFileSync(path.join(__dirname, fileName));
  const fileContent = buff.toString();
  return JSON.parse(fileContent);
};

module.exports = fileReader;
