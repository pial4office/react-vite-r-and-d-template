import { useEffect, useState } from 'react';
import { Console } from '../helpers/Console';
import chalk from 'chalk';
const log = console.log;

function ComponentTwo() {
  Console.printBorder('Component Two');
  log(
    chalk.magenta.bold(
      'Executed lines inside 👉 Component Two (outside return)'
    )
  );

  useEffect(() => {
    log(chalk.bgYellowBright('Initial Mount 👉 Component Two'));

    return () => {
      log(chalk.bgRed.bold.whiteBright('Component unmounted 👉 Component Two'));
    };
  }, []);

  useEffect(() => {
    log(
      chalk.bgRedBright.bold.whiteBright('Component mounted 👉 Component Two')
    );

    return () => {
      log(chalk.bgRed.bold.whiteBright('Component unmounted 👉 Component Two'));
    };
  });

  return (
    <div className="border border-success m-2 p-4">
      <h3 className="font-monospace">Component Two</h3>
    </div>
  );
}

export default ComponentTwo;
