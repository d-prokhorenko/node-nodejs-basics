import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import * as path from 'path';
import { getDirName } from '../utils/functions.js';

const __dirname = getDirName(import.meta.url);

const targetFileName = 'archive.gz';
const compressedFileName = 'fileToCompress.txt';
const targetDirName = 'files';
const targetFilePath = path.join(__dirname, targetDirName, targetFileName);
const compressedFilePath = path.join(
  __dirname,
  targetDirName,
  compressedFileName
);

const decompress = async () => {
  const fileContents = createReadStream(targetFilePath);
  const writeStream = createWriteStream(compressedFilePath);
  const unzip = createGunzip();

  fileContents.pipe(unzip).pipe(writeStream);
};

await decompress();
