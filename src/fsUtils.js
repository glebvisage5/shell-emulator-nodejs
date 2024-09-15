const fs = require('fs-extra');
const path = require('path');

const walkDir = (dirPath) => {
  const result = {};
  const items = fs.readdirSync(dirPath);
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      result[item] = walkDir(fullPath);
    } else {
      result[item] = null;
    }
  });
  return result;
};

const getCurrentDirectory = (fs, currentDir) => {
  const parts = currentDir.split(path.sep).filter(Boolean);
  let current = fs;
  parts.forEach(part => {
    if (current[part]) {
      current = current[part];
    }
  });
  return current;
};

module.exports = {
  walkDir,
  getCurrentDirectory
};
