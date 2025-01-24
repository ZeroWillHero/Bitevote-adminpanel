import React, { useState } from 'react';

const CurrienMealSelection = () => {
  const [defaultMealSize, setDefaultMealSize] = useState('');
  const [extraMealPrice, setExtraMealPrice] = useState('');
  const [options, setOptions] = useState({ currieOptions: [], mealOptions: [] });
  const [selectedOptions, setSelectedOptions] = useState({ currieOptions: [], mealOptions: [] });
  const [newOption, setNewOption] = useState({ currieOptions: '', mealOptions: '' });

  const handleCheckboxChange = (e, type) => {
    // Your existing checkbox change logic
  };

  const handleAddOption = (type) => {
    // Your existing add option logic
  };

  return (
    <div>
      {/* Input for Default Meal Size */}
      <div className="input-group">
        <label>
          Default Meal Size:
          <input
            type="text"
            value={defaultMealSize}
            onChange={(e) => setDefaultMealSize(e.target.value)}
            placeholder="Enter default meal size"
          />
        </label>
      </div>

      {/* Input for Extra Meal Price */}
      <div className="flex-col">
        <label>
          Extra Price Per Meal: 
          <input
            type="number"
            value={extraMealPrice}
            onChange={(e) => setExtraMealPrice(e.target.value)}
            placeholder="Rs."
          />
        </label>
      </div>

      {/* Render options only if both inputs are filled */}
      {defaultMealSize && extraMealPrice && (
        ['currieOptions', 'mealOptions'].map((type, index) => (
          <div key={index} className="add-currie-options">
            <h2>Select {type === 'currieOptions' ? 'Currie Options' : 'Meal Options'}</h2>
            {options[type].map((option, i) => (
              <div key={i}>
                <label>
                  <input
                    type="checkbox"
                    value={option}
                    checked={selectedOptions[type].includes(option)}
                    onChange={(e) => handleCheckboxChange(e, type)}
                  />
                  {option}
                </label>
              </div>
            ))}

            <div className="add-currie-option" style={{ marginTop: '20px' }}>
              <div className="add-currie-option-area flex">
                <input
                  type="text"
                  value={newOption[type]}
                  onChange={(e) => setNewOption((prev) => ({ ...prev, [type]: e.target.value }))}
                  placeholder={`Enter a new ${type === 'currieOptions' ? 'currie option' : 'meal option'}`}
                />
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="add-currie-option-btn"
                  onClick={() => handleAddOption(type)}
                >
                  Add Option
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CurrienMealSelection;
