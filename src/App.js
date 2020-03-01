import React, { useState, useEffect } from "react";
import "./App.css";

import dataBase from "./database.json";

import { Text, DropDown } from "./components";

const App = () => {
  const [fields, setFields] = useState([]);
  const [error, setError] = useState(false);
  const [reset, setFormReset] = useState(false);

  const saveValue = field => {
   console.log("save value")
   console.log(field)
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
