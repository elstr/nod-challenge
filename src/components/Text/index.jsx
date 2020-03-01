import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

import { INPUTS } from "../../utils/constants";

import "./styles.css";

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

  const onBlur = () => {
    // Check if user only passed by the field so we don't update progress
    // otherwise it's a false positive
    const hasValue = !error && value.trim() !== "";
    handleBlur({ name, value, error: !hasValue });
  };

  return (
    <div className="container">
      <ReactTooltip />
      <div data-tip={description && description}>
        <label htmlFor={`input-${name}`}>{`${name}: `}</label>
        <input
          style={{ fontSize: "18px", width: "300px" }}
          name={`input-${name}`}
          type={INPUTS[type].inputType}
          value={value}
          onBlur={() => onBlur()}
          onChange={e => verify(e.target.value)}
        />
      </div>
      {error && (
        <p>
          {INPUTS[type].errorMessage || `Oops.. there's an error in this field`}
        </p>
      )}
    </div>
  );
};

export default Text;
