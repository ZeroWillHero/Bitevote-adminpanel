import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import RadioButtonGroup from '../../components/RadioButton/RadioButton';
import CustomizableButton from '../../components/CustomizableButton/CustomizableButton';
import MealList from '../../components/MealList/MealList';


const Add = ({ url }) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: '',
    size: '',
    price: '',
    category: 'Fried Rice',
    currie_size: '',
  });

  const [selectedOptions, setSelectedOptions] = useState({
    currieOptions: [],
    mealOptions: [],
  });

  const [options, setOptions] = useState({
    currieOptions: [
      'Coconut Sambol',
      'Dhal Curry',
      'Soya Meat Curry',
      'Green Bean Curry',
      'Potato Curry',
      'Mukunuwenna Mellum',
    ],
    mealOptions: [
      'Boiled Egg - Rs.40',
      'Omlette - Rs.40',
      'Chicken Curry - Rs.50',
      'Fried Chicken - Rs.60',
      'Fish Curry - Rs.40',
      'Fried Fish - Rs.40',
    ],
  });

  const [newOption, setNewOption] = useState({
    currieOptions: '',
    mealOptions: '',
  });

  const handleCheckboxChange = (event, type) => {
    const { value, checked } = event.target;
    setSelectedOptions((prev) => ({
      ...prev,
      [type]: checked
        ? [...prev[type], value]
        : prev[type].filter((option) => option !== value),
    }));
  };

  const handleAddOption = (type) => {
    if (newOption[type].trim() !== '') {
      setOptions((prev) => ({
        ...prev,
        [type]: [...prev[type], newOption[type].trim()],
      }));
      setNewOption((prev) => ({ ...prev, [type]: '' }));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const createFormData = () => {
    const formData = new FormData();
    formData.append('image' , image);
    formData.append('name', data.name);
    formData.append('size', data.size);
    formData.append('price', data.price);
    formData.append('category', data.category);
    formData.append('currie_size', data.currie-size);
    formData.append('extra_currie-price', data.extra-currie-price);
    formData.append('currieOptions', selectedOptions.currieOptions);
    formData.append('mealOptions', selectedOptions.mealOptions);
    return formData;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={handleSubmit}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            type="file"
            id="image"
            hidden
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            value={data.name}
            onChange={handleChange}
          />
        </div>

        <RadioButtonGroup />

        <div className="add-size-meal">
          <div className="add-size flex-col">
            <p>Select size</p>
            <select name="size" onChange={handleChange}>
              <option value="Regular">Regular</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select name="category" onChange={handleChange}>
              <option value="Rice & Curry">Rice & Curry</option>
              <option value="Fried Rice">Fried Rice</option>
              <option value="Koththu">Koththu</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Burger">Burger</option>
              <option value="Shawarma">Shawarma</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              type="number"
              name="price"
              placeholder="Rs. 150"
              value={data.price}
              onChange={handleChange}
            />
          </div>
        </div>

        <CustomizableButton />

        {['currieOptions'].map((type, index) => (
          <div key={index} className="add-currie-options">
            <h2>Select Curries Option{type === 'currieOptions'}</h2>

          {/* select default currie options */}
            <div className="add-def-currie-options">
          <div className="add-currie-size flex-col">
            <p>Select default currie option size:</p>
            <select name="currie_size" onChange={handleChange}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        

        {/* price for the extra added currie */}
        <div className="add-extra-currie-price flex-col">
            <p>Price for the extra added currie:</p>
            <input
              type="number"
              name="extra_currie_price"
              placeholder="Rs. 15"
              value={data.extra_currie_price}
              onChange={handleChange}
            />
          </div>
          </div>
          <br />

            {/* select currie options */}
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
                  placeholder={`Enter a new Currie`}
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
        ))}

        {/* add meal option */}
        {['mealOptions'].map((type, index) => (
          <div key={index} className="add-currie-options">
            <h2>Select Meals Option{type === 'mealOptions'}</h2>

          {/* select default currie options */}
            
          

            {/* select currie options */}
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
                  placeholder={`Ex: Meal - Price`}
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
        ))}


        <MealList/>

        <button type="submit" className="add-btn">ADD</button>
      </form>
    </div>
  );
};

export default Add;
