import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";


const Text = ({ reset, field, handleBlur }) => {
  const { name, type, description } = field;
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (reset) setValue("");
  }, [reset]);

  return (
    <div>
      <ReactTooltip />
      <div data-tip={description && description}>
        <label htmlFor={`input-${name}`}>{`${name}: `}</label>
        <input
          name={`input-${name}`}
          type="text"
          value={value}
          onChange={e => console.log(e.target.value)}
          onBlur={e => console.log(e.target.value)}
        />
      </div>

      {error && (
        <span>
          Oops.. there's an error in this field
        </span>
      )}
    </div>
  );
};

export default Text;
