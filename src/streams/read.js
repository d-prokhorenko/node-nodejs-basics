import * as fs from 'fs';
import * as path from 'path';
import { getDirName } from '../utils/functions.js';

const { stdout } = process;
const __dirname = getDirName(import.meta.url);

const targetFileName = 'fileToRead.txt';
const targetDirName = 'files';
const targetFilePath = path.join(__dirname, targetDirName, targetFileName);

const read = async () => {
  fs.createReadStream(targetFilePath, 'utf-8').on('data', (chunk) =>
    stdout.write(chunk)
  );
};

await read();
