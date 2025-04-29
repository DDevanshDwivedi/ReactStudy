import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current !== null) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setSeconds(0);
  }

  return (
    <>
      <div>
        <h1>Stopwatch: {seconds} seconds</h1>
        <button onClick={startTimer}>Start</button>
        <br /><br />
        <button onClick={stopTimer}>Stop</button>
        <br /><br />
        <button onClick={resetTimer}>Reset</button>
        <br /><br />
      </div>
    </>
  );
}

export default App;
