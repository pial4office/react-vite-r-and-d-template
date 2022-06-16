import { useEffect, useState } from 'react';
import { Console } from '../helpers/Console';
import chalk from 'chalk';
const log = console.log;

function ComponentTwo() {
  Console.printBorder('Component Two');

  useEffect(() => {
    log(chalk.bgYellowBright('Initial Mount'));

    return () => {
      log(chalk.bgRed.bold.whiteBright('Component unmounted'));
    };
  }, []);

  useEffect(() => {
    log(chalk.bgRedBright.bold.whiteBright('Component mounted'));

    return () => {
      log(chalk.bgRed.bold.whiteBright('Component unmounted'));
    };
  });

  return (
    <div className="border border-success m-2 p-4">
      <h3>Component Two</h3>
    </div>
  );
}

export default ComponentTwo;
