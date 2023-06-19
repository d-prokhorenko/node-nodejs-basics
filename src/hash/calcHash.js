import { createHash } from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import { getDirName } from '../utils/functions.js';

const __dirname = getDirName(import.meta.url);

const fileName = 'fileToCalculateHashFor.txt';
const dirName = 'files';
const filePath = path.join(__dirname, dirName, fileName);

const calculateHash = async () => {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    const result = createHash('sha256').update(data).digest('hex');
    console.log(result);
  });
};

await calculateHash();
