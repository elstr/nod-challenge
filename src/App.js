import React, { useState, useEffect } from "react";
import "./App.css";

import dataBase from "./database.json";

import { Text, DropDown } from "./components";

// TODO: Move this to useEffect onMount
// iterate dataBase and add error to each object
const INITIAL_STATE = {
  "First Name": { value: "", error: true },
  "Last Name": { value: "", error: true },
  "Date of Birth": { value: "", error: true },
  Email: { value: "", error: true },
  Address: { value: "", error: true },
  "Contact Number": { value: "", error: true },
  Gender: { value: "", error: true },
  "Areas of Recommendation": { selectedValues: "", error: true }
};

const App = () => {
  const [fields, setFields] = useState(INITIAL_STATE);
  const [error, setError] = useState(true);
  const [reset, setFormReset] = useState(false);

  useEffect(() => {
    const hasError = Object.values(fields).map(f => f.error).includes(true);
    hasError ? setError(true) : setError(false);
  }, [fields]);

  const saveValue = field => {
    // Update fields with new field values
    const newFields = Object.assign({}, fields);
    newFields[field.name] = Object.assign({}, field);
    setFields(newFields);
  };

  const saveToCSV = () => {
    console.log("save csv")
    setFormReset(true)
  }

  return (
    <div className="App">
      {dataBase.map((field, index) => {
        switch (field.type) {
          case "dropdown":
          case "multi-select":
            return (
              <DropDown
                handleChange={value => saveValue(value)}
                key={`field-${index}`}
                field={field}
                reset={reset}
              />
            );
          default:
            return (
              <Text
                handleBlur={value => saveValue(value)}
                key={`field-${index}`}
                field={field}
                reset={reset}
              />
            );
        }
      })}

      <button onClick={() => saveToCSV()} disabled={error}>
        Submit
      </button>
    </div>
  );
};

export default App;
