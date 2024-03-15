import React, { useState } from "react";
import { data } from "./data";

function App() {
  const [ctryState, setctrtState] = useState("State");

  const handleChange = (e) => {
    setctrtState(e.target.value);
  };

  return (
    <div>
      <select name="state" id="state" onChange={handleChange}>
        {/* States */}
        {Object.keys(data).map((value, i) => {
          return (
            <option value={`${value}`} key={i}>
              {value}
            </option>
          );
        })}
      </select>
      &nbsp;&nbsp;
      {/* City  */}
      <select name="city" id="city">
        {data[ctryState].map((city, i) => {
          return (
            <option value={`${city}`} key={i}>
              {city}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default App;
