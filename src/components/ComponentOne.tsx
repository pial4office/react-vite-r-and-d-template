import { useEffect } from 'react';

export default function ComponentOne() {
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
      <h1>Compnent One</h1>
    </div>
  );
}
