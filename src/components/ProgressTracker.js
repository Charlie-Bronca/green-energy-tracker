import React, { useState, useEffect } from 'react';

function ProgressTracker() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Manually update progress (example: 50%)
    setProgress(50);
  }, []);

  return (
    <div className="progress-container2">
      <div className="progress-bar2" style={{ width: `${progress}%` }}>
        {`${progress}%`}
      </div>
    </div>
  );
}

export default ProgressTracker;
