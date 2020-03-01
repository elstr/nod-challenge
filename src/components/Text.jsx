import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

import { INPUTS } from "../utils/constants";

const Text = ({ reset, field, handleBlur }) => {
  const { name, type, description } = field;
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (reset) setValue("");
  }, [reset]);

  const verify = value => {
    const isValidate = value !== "" ? INPUTS[type].validation(value) : false;
    setValue(value);
    isValidate ? setError(false) : setError(true);
  };


  return (
    <div>
      <ReactTooltip />
      <div data-tip={description && description}>
        <label htmlFor={`input-${name}`}>{`${name}: `}</label>
        <input
          name={`input-${name}`}
          type={INPUTS[type].inputType}
          value={value}
          onChange={e => verify(e.target.value)}
          onBlur={() =>  handleBlur({ name, value, error })}
        />
      </div>

      {error && (
        <span>
          {INPUTS[type].errorMessage || `Oops.. there's an error in this field`}
        </span>
      )}
    </div>
  );
};

export default Text;
