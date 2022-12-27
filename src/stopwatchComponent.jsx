import { useState, useEffect } from "react";
import styles from "./stopwatchComponent.module.css";
export default function stopwatchComponent() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  const [isStart, setIsStart] = useState(false);

  const resetSecond = () => {
    setSecond(0);
    setMinute(0);
    setHour(0);
    setIsStart(false);
  };

  const stop = () => {
    setIsStart(!isStart);
    setSecond(second + 1);
  };

  useEffect(() => {
    if (isStart) {
      const interval = setInterval(() => {
        //* Second *
        if (second == 60) {
          setSecond(1);

          //* Minute *
          if (minute == 60) {
            setMinute(1);

            //* Hour *
            if (hour == 12) {
              setHour(0);
            } else {
              setHour(hour + 1);
            }
          } else {
            setMinute(minute + 1);
          }
        } else {
          setSecond(second + 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [second]);

  return (
    <div>
      <div className={`${styles.parent}`}>
        <div className={`${styles.child}`}>{('0' +hour).slice(-2)} </div>
        <div className={`${styles.child}`}>:</div>
        <div className={`${styles.child}`}>{('0' +minute).slice(-2)}</div>
        <div className={`${styles.child}`}>:</div>
        <div className={`${styles.child}`}>{('0' +second).slice(-2)}</div>
      </div>

      <button style={{ marginRight: "10px" }} onClick={() => resetSecond()}>
        Reset
      </button>
      <button className={`${isStart ? styles.stop : styles.start}`} onClick={() => stop()}>
         
        {isStart ? "Stop" : "Start"}{" "}
      </button>
    </div>
  );
}
