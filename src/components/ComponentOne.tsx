import { useEffect, useState } from 'react';
import { Console } from '../helpers/Console';
import chalk from 'chalk';
const log = console.log;

function ComponentOne() {
  Console.printBorder('Component One');
  log(
    chalk.magenta.bold(
      'Executed lines inside 👉 Component One (outside return)'
    )
  );

  useEffect(() => {
    log(chalk.bgYellowBright('Initial Mount 👉 Component One'));

    return () => {
      log(chalk.bgRed.bold.whiteBright('Component unmounted 👉 Component One'));
    };
  }, []);

  useEffect(() => {
    log(
      chalk.bgRedBright.bold.whiteBright('Component mounted 👉 Component One')
    );

    return () => {
      log(chalk.bgRed.bold.whiteBright('Component unmounted 👉 Component One'));
    };
  });

  return (
    <div className="border border-info m-2 p-4">
      <h3>Component One</h3>
    </div>
  );
}

export default ComponentOne;
