#!/usr/bin/env node
import { genDiff } from '../';

const run = () => {
  const program = commander
    .arguments('<firstConfig> <secondConfig>')
    .action((filepath1, filepath2) => { console.log(genDiff(filepath1, filepath2)); })
    .description('Compares two configuration files and shows a difference.')
    .option('-V, --version', 'output the version number')
    .option('-f, --format [type]', 'Output format')
    .parse(process.argv);
  return program;
};

run();
