
import React, { useState } from "react";
import "./CustomizableButton.css";

function CustomizableSelector() {
  // State to manage the customizable option
  const [isCustomizable, setIsCustomizable] = useState("");

  // Handle radio button change
  const handleCustomizableChange = (event) => {
    setIsCustomizable(event.target.value);
  };

  return (
    <div className="customizable">
        
      <h2>Is this item customizable?</h2>
      <div className="customizable-button">
      {/* Radio buttons for customizable options */}
      <label>
        <input
          type="radio"
          name="customizable"
          value="Customizable"
          checked={isCustomizable === "Customizable"}
          onChange={handleCustomizableChange}
          style={{ marginRight: "10px" }}
        />
        Customizable
      </label>

      <label>
        <input
          type="radio"
          name="customizable"
          value="Not Customizable"
          checked={isCustomizable === "Not Customizable"}
          onChange={handleCustomizableChange}
          style={{ marginRight: "10px" }}
        />
        Not Customizable
      </label>
      </div>
    </div>
  );
}

export default CustomizableSelector;