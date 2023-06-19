import * as fs from 'fs';
import * as path from 'path';
import { getDirName } from '../utils/functions.js';

const __dirname = getDirName(import.meta.url);

const targetDirName = 'files';
const targetFileName = 'fileToRead.txt';
const targetFilePath = path.join(__dirname, targetDirName, targetFileName);
const errorMessage = 'FS operation failed';

const read = async () => {
  fs.readFile(targetFilePath, { encoding: 'UTF-8' }, (err, data) => {
    if (err) throw new Error(errorMessage);
    console.log(data);
  });
};

await read();
