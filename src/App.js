import React, { useState } from "react";
import "./App.css";
import Loader from "./components/Loader";

const App = () => {
  const [radius] = useState(90);
  const [progress] = useState(0);
  const [speed] = useState(0.2);

  return (
    <div className="App">
      <Loader progress={progress} radius={radius} speed={speed}>
        {(restartLoading, pausePlayLoading, buttonRef) => (
          <div>
            <button onClick={restartLoading} className="button-primary">
              Start
            </button>
            <button
              onClick={pausePlayLoading}
              ref={buttonRef}
              className="button-primary"
            >
              Pause
            </button>
          </div>
        )}
      </Loader>
    </div>
  );
};

export default App;
