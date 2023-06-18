import { Worker } from 'worker_threads';
import * as path from 'path';
import * as os from 'os';
import { getDirName } from '../utils/functions.js';

const __dirName = getDirName(import.meta.url);
const workerPath = path.join(__dirName, 'worker.js');

const performCalculations = async () => {
  const promises = [];
  for (let i = 0; i < os.cpus().length; i++) {
    promises.push(
      new Promise((res, rej) => {
        const worker = new Worker(workerPath, {
          workerData: { number: 10 + i },
        });
        worker.on('message', (msg) => {
          res(msg);
        });
        worker.on('error', rej);
        worker.on('exit', (code) => {
          if (code !== 0)
            rej(new Error(`Worker stopped with exit code ${code}`));
        });
      })
    );
  }
  Promise.allSettled(promises).then((data) =>
    console.log(data.map(({ value }) => value))
  );
};

await performCalculations();
