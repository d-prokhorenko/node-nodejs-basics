import { parentPort, workerData } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const result = { status: null, data: null };
  try {
    const res = nthFibonacci(workerData.number);
    result.status = 'resolved';
    result.data = res;
  } catch (error) {
    result.status = 'error';
  }
  parentPort.postMessage(result);
};

sendResult();
