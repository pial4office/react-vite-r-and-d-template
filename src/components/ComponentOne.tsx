import { useEffect, useState } from 'react';
import { Console } from '../helpers/Console';
import chalk from 'chalk';
const log = console.log;

function ComponentOne() {
  Console.printBorder('Component One');

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
    <div className="border border-info m-2 p-4">
      <h3>Component One</h3>
    </div>
  );
}

export default ComponentOne;
