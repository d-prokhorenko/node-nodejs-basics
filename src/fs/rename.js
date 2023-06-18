import * as fs from 'fs';
import * as path from 'path';
import { getDirName } from '../utils/functions.js';

const __dirname = getDirName(import.meta.url);

const targetFolderName = 'files';
const targetFileName = 'wrongFilename.txt';
const renamedFileName = 'properFilename.md';
const errorMessage = 'FS operation failed';
const successMessage = 'The file has been renamed';
const targetFilePath = path.join(__dirname, targetFolderName, targetFileName);
const renamedFilePath = path.join(__dirname, targetFolderName, renamedFileName);

const rename = async () => {
  fs.access(targetFilePath, fs.F_OK, (err) => {
    if (err) throw new Error(errorMessage);
    fs.access(renamedFilePath, fs.F_OK, (err) => {
      if (!err) throw new Error(errorMessage);
      fs.rename(targetFilePath, renamedFilePath, () => {
        console.log(successMessage);
      });
    });
  });
};

await rename();
