import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    // Cleanup the timer when component unmounts
    return () => clearInterval(timer);
  }, [timer]);

  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementIfOddHandler = () => {
    if (count % 2 !== 0) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const asyncIncrementHandler = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const toggleTimerHandler = () => {
    if (timerRunning) {
      clearInterval(timer);
      setTimerRunning(false);
    } else {
      const newTimer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setTimer(newTimer);
      setTimerRunning(true);
    }
  };

  return (
    <div className="container">
      <div className="counter">
        <h2>Current Count: {count}</h2>
      </div>
      <div className="button-row">
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div className="button-row">
        <button onClick={incrementIfOddHandler}>Increment If Odd</button>
        <button onClick={asyncIncrementHandler}>Async Increment</button>
      </div>
      <div className="button-row">
        <button className="timer-button" onClick={toggleTimerHandler}>
          {timerRunning ? "Stop Timer" : "Start Timer"}
        </button>
      </div>
    </div>
  );
}

export default Counter;