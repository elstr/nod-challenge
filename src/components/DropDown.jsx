import React, { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

const DropDown = ({ reset, field, handleChange }) => {
  const { name, type, options, description } = field;
  const isMultiple = type === "multi-select";
  const [selectedOptions, setOptions] = useState([]);

  useEffect(() => {
    if(reset) setOptions([])
   }, [reset])

  useEffect(() => {
    const selectedValues = selectedOptions.length
      ? selectedOptions.map(option => option.value)
      : [];

    // If it's not multiple and no value was selected we default one onBlur
    const error = isMultiple && selectedValues.length === 0;

    handleChange({ name, selectedValues, error });
  }, [selectedOptions]);
  
  const handleBlur = options => {
    // Default selected option if none is picked in single dropdown
    if (!isMultiple && selectedOptions.length === 0) { 
      setOptions([options[0]])
    }
  }

  return (
    <div>
      <ReactTooltip />
      <div data-tip={description && description}>
        <label htmlFor={`dropdown-${type}`}>{name}</label>
        <select
          name={`dropdown-${type}`}
          multiple={isMultiple}
          onBlur={({ target }) => handleBlur(target.selectedOptions)}
          onChange={({ target }) => setOptions([...target.selectedOptions])}
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
