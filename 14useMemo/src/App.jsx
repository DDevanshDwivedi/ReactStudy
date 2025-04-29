import React, { useState, useMemo } from 'react';
import './app.css'
function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for (let i = 0; i <= 1000000000; i++) {} // Simulated heavy task
    return num * 2;
  }

  const doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <>
    <div>
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
      </div>

      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div>
        <p>Count: {count}</p>
        <p>Double of Input (memoized): {doubleValue}</p>
      </div>
    </div>
    </>
  );
}

export default App;
