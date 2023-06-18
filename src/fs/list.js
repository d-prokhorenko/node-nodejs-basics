import * as fs from 'fs';
import * as path from 'path';
import { getDirName } from '../utils/functions.js';

const __dirname = getDirName(import.meta.url);

const targetDirName = 'files';
const targetDirPath = path.join(__dirname, targetDirName);
const errorMessage = 'FS operation failed';

const list = async () => {
  fs.readdir(targetDirPath, (err, files) => {
    if (err) throw new Error(errorMessage);
    files.forEach((file) => {
      console.log(file);
    });
  });
};

await list();
