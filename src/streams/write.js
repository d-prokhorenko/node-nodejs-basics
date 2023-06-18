import * as fs from 'fs';
import * as path from 'path';
import { getDirName } from '../utils/functions.js';

const { stdin } = process;
const __dirname = getDirName(import.meta.url);

const targetFileName = 'fileToWrite.txt';
const targetDirName = 'files';
const targetFilePath = path.join(__dirname, targetDirName, targetFileName);

const write = async () => {
  stdin.on('data', (data) => {
    fs.createWriteStream(targetFilePath).write(data);
  });
};

await write();
