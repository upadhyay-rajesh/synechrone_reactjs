import React, { useState, useCallback } from 'react';

const Counter = ({ increment }) => {
  console.log('Counter re-rendered');
  return <button onClick={increment}>Increment</button>;
};

const App = () => {
  const [count, setCount] = useState(0);

  // Memoize the increment function
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency: count

  return (
    <div>
      <h1>Count: {count}</h1>
      <Counter increment={increment} />
    </div>
  );
};

export default App;
