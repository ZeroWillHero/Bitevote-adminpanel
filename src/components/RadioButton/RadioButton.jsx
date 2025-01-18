import React, { useState } from "react";
import "./RadioButton.css";

function RadioButtonGroup() {
  // State to manage the selected radio button
  const [selectedOption, setSelectedOption] = useState("");

  // Options for the radio buttons
  const options = ["Breakfast", "Lunch", "Dinner"];

  // Handle radio button change
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="options">
      <h2>Select an Option</h2>
      
      <div className="select-option flex-col">
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleRadioChange}
            />
            {option}
          </label>
        </div>
        
      )
      )}
      </div>
    </div>
  );
}

export default RadioButtonGroup;