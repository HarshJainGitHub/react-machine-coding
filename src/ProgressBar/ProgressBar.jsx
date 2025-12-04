import React from "react";
import "./progressbar.css";
import { useState } from "react";
import { useEffect } from "react";

const ProgressBar = ({ progress }) => {

  const [animatedProgressBar, setAnimatedProgressBar] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgressBar(progress);
    },100);

    return(() => clearTimeout(timer));
  },[progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        role="progressbar"
        style={{
          transform: `translateX(${animatedProgressBar - 100}%)`,
          color: animatedProgressBar < 5 ? "black" : "white",
        }}
        aria-valuenow={progress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
