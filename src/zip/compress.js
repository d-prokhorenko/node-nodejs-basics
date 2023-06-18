import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import { promisify } from 'util';
import * as path from 'path';
import { getDirName } from '../utils/functions.js';

const __dirname = getDirName(import.meta.url);

const targetFileName = 'fileToCompress.txt';
const compressedFileName = 'archive.gz';
const targetDirName = 'files';
const targetFilePath = path.join(__dirname, targetDirName, targetFileName);
const compressedFilePath = path.join(
  __dirname,
  targetDirName,
  compressedFileName
);

const pipe = promisify(pipeline);

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(targetFilePath);
  const destination = createWriteStream(compressedFilePath);
  await pipe(source, gzip, destination);
};

await compress().catch((err) => {
  console.error('An error occurred:', err);
  process.exitCode = 1;
});
