import { useState, useEffect } from "react";

export  default function stopwatchComponent   ()   {
  const [second, setSecond] = useState(0);
  const [isStart, setIsStart] = useState(false);

  const resetSecond = () => {
    setSecond(0);
    setIsStart(false);
  };

  const stop = () => {
    setIsStart(!isStart);
    setSecond(second + 1);
  };

  useEffect(() => {
    if (isStart) {
      const interval = setInterval(() => {
        setSecond(second + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [second]);

  return (
    <div>
      <div>{second}</div>

      <button style={{ marginRight: "10px" }} onClick={() => resetSecond()}>
        Reset
      </button>
      <button onClick={() => stop()}> {isStart ? "Stop" : "Start"} </button>
    </div>
  );
};

 