import { useEffect, useState } from 'react';
import './App.css';
import { Console } from './helpers/Console';
import chalk from 'chalk';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
const log = console.log;

function App() {
  Console.printBorder('App');
  log(chalk.magenta.bold('Executed lines inside 👉 App (outside return)'));

  const [count, setCount] = useState(0);

  useEffect(() => {
    log(chalk.bgYellowBright('Initial Mount 👉 App'));
  }, []);

  useEffect(() => {
    log(chalk.bgRedBright.bold.whiteBright('Component mounted 👉 App'));

    return () => {
      log(chalk.bgRed.bold.whiteBright('Component unmounted 👉 App'));
    };
  });

  return (
    <div className="App border border-warning m-4 p-2">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setCount((count) => count + 1)}
      >
        count is: {count}
      </button>

      <h2>App</h2>

      <ComponentOne />
      <ComponentTwo />
    </div>
  );
}

export default App;
