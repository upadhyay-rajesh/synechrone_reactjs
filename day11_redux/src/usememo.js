import React, { useState, useMemo } from 'react';

const FactorialCalculator = () => {
  const [number, setNumber] = useState(0);

  // Expensive factorial calculation
  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);  // Only recalculate when 'number' changes

  return (
    <div>
      <h1>Factorial of {number} is {factorial}</h1>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(Number(e.target.value))} 
      />
    </div>
  );
};

export default FactorialCalculator;
