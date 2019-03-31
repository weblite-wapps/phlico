const fs = require("fs");
const path = require("path");
process.env.WEBLITE_WAPPS_DIR = "/Users/parsa/Desktop/WebLite/servers";
const filesPath = path.resolve(process.env.WEBLITE_WAPPS_DIR, "phlico");

const imagesPath = path.resolve(filesPath, "images");

const getImagePath = fileName => path.resolve(imagesPath, fileName);

const remove = fileName => {
  const filePath = getImagePath(fileName);
  fs.stat(filePath, err => {
    if (!err) return fs.unlink(filePath, console.log);
    return new Error("Remove function is terminated");
  });
};

module.exports = {
  filesPath,
  imagesPath,
  getImagePath,
  remove
};
