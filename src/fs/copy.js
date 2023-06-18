import * as fs from 'fs';
import * as path from 'path';
import { getDirName } from '../utils/functions.js';

const __dirname = getDirName(import.meta.url);

const targetDirNamePath = path.join(__dirname, 'files');
const copiedDirName = path.join(__dirname, 'files_copy');
const errorMessage = 'FS operation failed';

const copy = async () => {
  fs.stat(targetDirNamePath, fs.F_OK, (err) => {
    if (err) {
      throw new Error(errorMessage);
    } else {
      fs.mkdir(copiedDirName, (err) => {
        if (err) throw new Error(errorMessage);
        fs.cp(targetDirNamePath, copiedDirName, { recursive: true }, (err) => {
          if (err) throw err;
        });
      });
    }
  });
};

await copy();
