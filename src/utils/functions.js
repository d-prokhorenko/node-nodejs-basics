import * as url from 'url';

export const getDirName = (metaUrl) => {
  return url.fileURLToPath(new URL('.', metaUrl));
};

export const getFileName = (metaUrl) => {
  return url.fileURLToPath(metaUrl);
};
