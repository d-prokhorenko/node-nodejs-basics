import * as fs from 'fs';
import * as path from 'path';
import { getDirName } from '../utils/functions.js';

const __dirname = getDirName(import.meta.url);

const targetDirName = 'files';
const targetFileName = 'fresh.txt';
const targetFileContent = 'I am fresh and young';
const errorMessage = 'FS operation failed';
const successfulMessage = 'The file has been created';

const create = async () => {
  fs.access(
    path.join(__dirname, targetDirName, targetFileName),
    fs.F_OK,
    (err) => {
      if (!err) {
        console.error(errorMessage);
      } else {
        fs.writeFile(
          path.join(__dirname, targetDirName, targetFileName),
          targetFileContent,
          (err) => {
            if (err) throw err;
            console.log(successfulMessage);
          }
        );
      }
    }
  );
};

await create();
