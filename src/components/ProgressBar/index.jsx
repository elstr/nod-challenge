import React from "react";
import "./styles.css"
const Filler = ({percentage}) => {
  return <div className="filler" style={{ width: `${percentage}%` }} />;
};

const ProgressBar = ({percentage}) => {
  return (
    <div className="progress-bar">
      <Filler percentage={percentage} />
    </div>
  );
};

export default ProgressBar;
