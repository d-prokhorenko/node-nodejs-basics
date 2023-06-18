const args = process.argv.slice(2);

const parseArgs = () => {
  const result = args.reduce(
    (res, arg, index) =>
      index % 2
        ? `${res}${arg}${index === args.length - 1 ? '' : ', '}`
        : `${res}${arg.slice(2)} is `,
    ''
  );
  console.log(result);
};

parseArgs();
