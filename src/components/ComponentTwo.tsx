import { useEffect } from 'react';

export default function ComponentTwo() {
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
    <div>
      <h1>Compnent Two</h1>
    </div>
  );
}
