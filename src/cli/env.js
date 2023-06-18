const vars = process.env;
const RSS_KEY = 'RSS_';

const parseEnv = () => {
  const parsedVarsKeys = Object.keys(vars).filter((varKey) =>
    varKey.startsWith(RSS_KEY)
  );
  const result = parsedVarsKeys.reduce(
    (res, varKey, index) =>
      `${res}${varKey}=${vars[varKey]}${
        index === parsedVarsKeys.length - 1 ? '' : '; '
      }`,
    ''
  );
  console.log(result);
};

parseEnv();
