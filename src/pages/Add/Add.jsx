import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import { useSelector } from 'react-redux';
import RadioButtonGroup from '../../components/RadioButton/RadioButton';
import CustomizableButton from '../../components/CustomizableButton/CustomizableButton';
import { addFoods } from '../../firebase/foods/addFoods';

const Add = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    name: '',
    size: '',
    price: '',
    category: 'Fried Rice',
    currie_size: '',
    extra_currie_price: '',
    imageUrl: '', // Add imageUrl field
  });

  const [options, setOptions] = useState({
    currieOptions: [],
  });

  const [newOption, setNewOption] = useState({
    currieOptions: { name: '', price: '' },
  });

  // Get the global state for isCustomizable
  const isCustomizable = useSelector((state) => state.add.customBtn);

  const handleAddOption = (type) => {
    if (newOption[type].name.trim() !== '' && newOption[type].price.trim() !== '') {
      const newItem = {
        name: newOption[type].name.trim(),
        price: newOption[type].price.trim(),
      };
      setOptions((prev) => ({
        ...prev,
        [type]: [...prev[type], newItem],
      }));
      setNewOption((prev) => ({ ...prev, [type]: { name: '', price: '' } }));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNewOptionChange = (event, type) => {
    const { name, value } = event.target;
    setNewOption((prev) => ({
      ...prev,
      [type]: { ...prev[type], [name]: value },
    }));
  };

  // Method to gather all form data into a JavaScript object
  const gatherFormData = async () => {
    const formData = {
      ...data,
      currieOptions: options.currieOptions, // Include all currie options
    };
    return formData;
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const formData = await gatherFormData();
    console.log('Form Data:', formData); // Log the form data
    await addFoods(formData);
    setIsLoading(false); // Call the addFoods function from firebase
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={handleSubmit}>
        <div className="add-img-upload flex-col">
          <p>Enter Image URL</p>
          <input
            type="text"
            name="imageUrl"
            placeholder="Enter image URL"
            value={data.imageUrl}
            onChange={handleChange}
            required
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

        {/* Show currie options only if customizable */}
        {isCustomizable && (
          <>
            {['currieOptions'].map((type, index) => (
              <div key={index} className="add-currie-options">
                <h2>Select Curries Option</h2>

                {/* Default currie size and extra currie price */}
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

                {/* Display added currie options */}
                {options[type].map((option, i) => (
                  <div key={i}>
                    <p>{`${option.name} - Rs.${option.price}`}</p>
                  </div>
                ))}

                {/* Add new currie option */}
                <div className="add-currie-option" style={{ marginTop: '20px' }}>
                  <div className="add-currie-option-area flex">
                    <input
                      type="text"
                      name="name"
                      value={newOption[type].name}
                      onChange={(e) => handleNewOptionChange(e, type)}
                      placeholder="Enter a new currie name"
                    />
                    <input
                      type="number"
                      name="price"
                      value={newOption[type].price}
                      onChange={(e) => handleNewOptionChange(e, type)}
                      placeholder="Price"
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
          </>
        )}

        <button type="submit" className="add-btn">
          {isLoading ? 'Adding food...' : 'Add Food'}
        </button>
      </form>
    </div>
  );
};

export default Add;