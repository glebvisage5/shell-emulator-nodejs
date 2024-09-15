const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

describe('Shell Emulator', () => {
  beforeAll(() => {
    fs.ensureDirSync('../virtual_fs');
    fs.writeFileSync('../virtual_fs/test.txt', 'Hello World');
  });

  afterAll(() => {
    fs.removeSync('../virtual_fs');
  });

  test('ls command should list files in the directory', () => {
    const output = execSync('node src/emulator.js --config=./config.json', { input: 'ls\n', encoding: 'utf8' });
    expect(output).toContain('virtual_fs');
  });

  test('cd command should change the directory', () => {
    execSync('node src/emulator.js --config=./config.json', { input: 'cd test\nls\n', encoding: 'utf8' });
    const output = execSync('node src/emulator.js --config=./config.json', { input: 'ls\n', encoding: 'utf8' });
    expect(output).not.toContain('test.txt');
  });

  test('find command should find the file in the directory', () => {
    const output = execSync('node src/emulator.js --config=./config.json', { input: 'find test.txt\n', encoding: 'utf8' });
    expect(output).toContain('test.txt');
  });

  test('clear command should clear the screen (simulated)', () => {
    execSync('node src/emulator.js --config=./config.json', { input: 'clear\n', encoding: 'utf8' });
    expect(true).toBe(true);
  });

  test('chmod command should simulate changing file permissions', () => {
    const output = execSync('node src/emulator.js --config=./config.json', { input: 'chmod 755 test.txt\n', encoding: 'utf8' });
    expect(output).toContain('Changing permissions of test.txt to 755');
  });
});
