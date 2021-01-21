import React, { useEffect, useRef } from "react";
import { convertProgressToCircumference } from "../utils/LoaderProgressAnimation";

const Loader = ({ progress, radius, children, speed }) => {
  const containerRef = useRef(null);
  const indicatorRef = useRef(null);
  const buttonRef = useRef(null);

  let isPaused = false;
  let curProgress = progress;

  const restartLoading = () => {
    if (curProgress >= 100) {
      curProgress = 0;
      loop();
    }
    curProgress = 0;
    if (isPaused) {
      curProgress = 0;
      isPaused = false;
      buttonRef.current.innerHTML = "Pause";
      loop();
    }
  };

  const pausePlayLoading = () => {
    isPaused = !isPaused;
    if (!isPaused) {
      loop();
      buttonRef.current.innerHTML = "Pause";
    } else {
      buttonRef.current.innerHTML = "Play";
    }
    if (curProgress >= 100) {
      curProgress = 0;
      loop();
    }
  };

  const loop = () => {
    if (curProgress <= 100) {
      curProgress += speed;
      setTimeout(() => {
        indicatorRef.current.setAttribute(
          "stroke-dashoffset",
          curProgress > 100
            ? "0"
            : convertProgressToCircumference(radius, curProgress)
        );
        containerRef.current.setAttribute(
          "data-pct",
          Math.min(100, Math.round(curProgress))
        );
        !isPaused && loop();
      }, 1000 / 60);
    }
  };

  useEffect(() => {
    loop();
  });

  return (
    <div className="loader-wrapper">
      <div id="cont" ref={containerRef} data-pct={progress}>
        <svg
          id="svg"
          width="200"
          height="200"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            r={radius}
            cx="100"
            cy="100"
            fill="transparent"
            strokeDasharray="565.48"
            strokeDashoffset="0"
          ></circle>
          <circle
            id="bar"
            r={radius}
            cx="100"
            cy="100"
            fill="transparent"
            strokeDasharray="565.48"
            ref={indicatorRef}
          ></circle>
        </svg>
      </div>
      {children(restartLoading, pausePlayLoading, buttonRef)}
    </div>
  );
};

export default Loader;
