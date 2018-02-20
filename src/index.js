import commander from 'commander';

const genDiff = () => {
  const program = commander
    .arguments('<firstConfig> <secondConfig>')
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version', 'output the version number')
    .option('-f, --format [type]', 'Output format')
    .parse(process.argv);
  return program;
};

export default genDiff;
