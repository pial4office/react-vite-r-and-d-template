import { useEffect, useState } from 'react';
import './App.css';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('on intial mount');
  }, []);

  useEffect(() => {
    console.log('on mount');
  });

  const dummyFunction = () => {
    console.log('Executed on render');
  };

  dummyFunction();

  return (
    <div className="App">
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
      <ComponentOne />
      <ComponentTwo />
    </div>
  );
}

export default App;
