import * as fs from 'fs';
import * as path from 'path';
import { getDirName } from '../utils/functions.js';

const __dirname = getDirName(import.meta.url);

const targetDirName = 'files';
const targetFileName = 'fileToRemove.txt';
const targetFilePath = path.join(__dirname, targetDirName, targetFileName);
const errorMessage = 'FS operation failed';
const successfulMessage = 'The file has been deleted';

const remove = async () => {
  fs.access(targetFilePath, fs.F_OK, (err) => {
    if (err) throw new Error(errorMessage);
    fs.unlink(targetFilePath, (err) => {
      if (err) throw err;
      console.log(successfulMessage);
    });
  });
};

await remove();
