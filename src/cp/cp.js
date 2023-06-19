import { spawn } from 'child_process';
import * as path from 'path';
import { getDirName } from '../utils/functions.js';

const __dirname = getDirName(import.meta.url);

const childScriptDirName = 'files';
const childScriptFileName = 'script.js';

const childScriptPath = path.join(
  __dirname,
  childScriptDirName,
  childScriptFileName
);

const spawnChildProcess = async (args) => {
  spawn('node', [childScriptPath, ...args], {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
  });
};

spawnChildProcess([0, 1, 2]);
