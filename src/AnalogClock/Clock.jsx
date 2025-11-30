import React, {useState, useEffect } from "react";
import "./clock.css";

const Clock = () => {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="clock">
      <div className="hour_hand"  style={{
            transform: `rotateZ(${time.getHours() * 30}deg)`
          }}></div>
      <div className="min_hand"  style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`
          }}></div>
      <div className="sec_hand"  style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`
          }}></div>
    </div>
  );
};

export default Clock;
