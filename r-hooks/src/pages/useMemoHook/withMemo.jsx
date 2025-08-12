import React, { useState, useMemo } from 'react';

function WithUseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  function expensiveCalculation(num) {
    console.log('Calculating...');
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2;
  }

  const result = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h2>Count: {count} - Result: {result}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type..." />
    </div>
  );
}

export default WithUseMemo;
