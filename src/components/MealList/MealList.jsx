import React, { useState } from 'react';
import './MealList.css';

const MealList = () => {
  const [meal, setMeal] = useState('');
  const [price, setPrice] = useState('');
  const [meals, setMeals] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState({});

  const handleAddMeal = () => {
    if (meal && price) {
      setMeals([...meals, { meal, price }]);
      setMeal('');
      setPrice('');
    }
  };

  const handleCheckboxChange = (meal) => {
    setSelectedMeals((prevSelected) => ({
      ...prevSelected,
      [meal]: !prevSelected[meal],
    }));
  };

  return (
    <div className='meal-list'>
        <div className='meal-list-inputs flex-col'>
      <h1>Meal List</h1>
      <input
        type="text"
        className='enter-meal'
        placeholder="Enter meal name"
        value={meal}
        onChange={(e) => setMeal(e.target.value)}
      />
      <input
        type="number"
        className='enter-price'
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      </div>
      <button onClick={handleAddMeal} className='add-meal-button'>Add Meal</button>
<br />
<div className='added-meals'>
      <h2>Added Meals:</h2>
      <ul>
        {meals.map((item, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                value={item}
                checked={!!selectedMeals[item.meal]}
                onChange={() => handleCheckboxChange(item.meal)}
              />
              {item.meal} - Rs.{item.price}
            </label>
          </li>
        ))}
      </ul>
      </div>

      
    </div>
  );
};

export default MealList;
