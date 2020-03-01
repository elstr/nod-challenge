import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

const DropDown = ({ reset, field, handleChange }) => {
  const { name, type, options, description } = field;
  const isMultiple = type === "multi-select";
  const [selectedOptions, setOptions] = useState([]);

  useEffect(() => {
    if(reset) setOptions([])
   }, [reset])


  return (
    <div>
      <ReactTooltip />
      <div data-tip={description && description}>
        <label htmlFor={`dropdown-${type}`}>{name}</label>
        <select
          name={`dropdown-${type}`}
          multiple={isMultiple}
        >
          {Object.keys(options).map((key, i) => {
            const option = options[key];
            return (
              <option value={option} key={`option-${i}`}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
