const fs = require('fs-extra');
const path = require('path');
const AdmZip = require('adm-zip');
const yargs = require('yargs');

const CONFIG_PATH = '../config.json';
let currentDir = '/';
let virtualFs = {};

const loadConfig = () => {
  const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
  return config;
};

const loadVirtualFs = (zipPath) => {
  fs.ensureDirSync('../virtual_fs');
  fs.emptyDirSync('../virtual_fs');

  const zip = new AdmZip(zipPath);
  zip.extractAllTo('../virtual_fs', true);

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

  virtualFs = walkDir('../virtual_fs');
};

const ls = () => {
  const dir = getCurrentDirectory(virtualFs);
  return Object.keys(dir).join(' ');
};

const cd = (dir) => {
  const dirParts = dir.split(path.sep);
  let current = virtualFs;
  for (const part of dirParts) {
    if (part === '..') {
      currentDir = path.dirname(currentDir);
    } else if (current[part]) {
      current = current[part];
      currentDir = path.join(currentDir, part);
    } else {
      throw new Error(`Directory ${dir} does not exist.`);
    }
  }
};

const clear = () => {
  console.clear();
};

const chmod = (permissions, filePath) => {
  console.log(`Changing permissions of ${filePath} to ${permissions}`);
};

const find = (name) => {
    const search = (fs, name, currentPath) => {
      const results = [];
      for (const key in fs) {
        if (key === name) {
          results.push(path.join(currentPath, key));
        }
        if (fs[key] && typeof fs[key] === 'object') {
          results.push(...search(fs[key], name, path.join(currentPath, key)));
        }
      }
      return results;
    };
    return search(virtualFs, name, currentDir).join('\n');
  };

const getCurrentDirectory = (fs) => {
  const parts = currentDir.split(path.sep).filter(Boolean);
  let current = fs;
  parts.forEach(part => {
    if (current[part]) {
      current = current[part];
    }
  });
  return current;
};

const runCommand = (command, args) => {
  try {
    switch (command) {
      case 'ls':
        console.log(ls());
        break;
      case 'cd':
        cd(args[0]);
        break;
      case 'clear':
        clear();
        break;
      case 'chmod':
        chmod(args[0], args[1]);
        break;
      case 'find':
        console.log(find(args[0]));
        break;
      case 'exit':
        process.exit(0);
        break;
      default:
        console.log(`Command ${command} not recognized.`);
    }
  } catch (error) {
    console.error(error.message);
  }
};

const main = () => {
  const argv = yargs.option('config', {
    type: 'string',
    description: 'Path to config file',
    demandOption: true
  }).argv;

  const { config } = argv;
  if (!fs.existsSync(config)) {
    console.error(`Config file ${config} does not exist.`);
    process.exit(1);
  }

  const { computerName, zipPath } = JSON.parse(fs.readFileSync(config, 'utf8'));
  loadVirtualFs(zipPath);

  console.log(`Welcome to ${computerName}!`);
  process.stdin.setEncoding('utf8');
  process.stdout.write(`${computerName}$ `);

  process.stdin.on('data', (data) => {  
    const [command, ...args] = data.trim().split(' ');
    runCommand(command, args);
    process.stdout.write(`${computerName}$ `);
  });
};

main();
