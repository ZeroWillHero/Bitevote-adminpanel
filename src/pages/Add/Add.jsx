import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import RadioButtonGroup from '../../components/RadioButton/RadioButton';
import CustomizableButton from '../../components/CustomizableButton/CustomizableButton';

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: '',
    size: '',
    price: '',
    category: 'Fried Rice',
  });



  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [options1, setOptions1] = useState([
    'Coconut Sambol',
    'Dhal Curry',
    'Soya Meat Curry',
    'Green Bean Curry',
    'Potato Curry',
    'Mukunuwenna Mellum',
  ]);

  const [newOption1, setNewOption1] = useState('');

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedOptions1([...selectedOptions1, value]);
    } else {
      setSelectedOptions1(selectedOptions1.filter((option) => option !== value));
    }
  };

  const handleAddOption = () => {
    if (newOption1.trim() !== '') {
      setOptions1([...options1, newOption1.trim()]);
      setNewOption1('');
    }

    if (checked) {
      setSelectedOptions1([...selectedOptions1, value]);
    } else {
      setSelectedOptions1(selectedOptions1.filter((option) => option !== value));
    }
  };

  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [options2, setOptions2] = useState([
    'Boiled Egg',
    'Omlette',
    'Chicken Curry',
    'Fried chicken',
    'Fish Curry',
    'Fried Fish',
  ]);

  const [newOption2, setNewOption2] = useState('');

  const handleCheckboxChange2 = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedOptions2([...selectedOptions2, value]);
    } else {
      setSelectedOptions2(selectedOptions2.filter((option) => option !== value));
    }
  };

  const handleAddOption2 = () => {
    if (newOption2.trim() !== '') {
      setOptions2([...options2, newOption2.trim()]);
      setNewOption2('');
    }

    if (checked) {
      setSelectedOptions2([...selectedOptions2, value]);
    } else {
      setSelectedOptions2(selectedOptions2.filter((option) => option !== value));
    }
  }; 




  const [selectedSize, setSelectedSize] = useState('regular');
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('size', data.size);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: '',
        size: '',
        price: '',
        category: 'Rice & Curry',
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <RadioButtonGroup />
        <div className="add-size-meal">
          <div className="add-size flex-col">
            <p>Select size</p>
            <select onChange={onChangeHandler} name="size">
              <option value="Regular">Regular</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select onChange={onChangeHandler} name="category">
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
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="Rs. 150"
            />
          </div>
        </div>

        <CustomizableButton />

        <div className="add-currie-options">
          <div className="currie-option">
            <h2>Select Currie Options</h2>

            {/* Display checkboxes */}
            {options1.map((option1, index1) => (
              <div key={index1}>
                <label>
                  <input
                    type="checkbox"
                    value={option1}
                    checked={selectedOptions1.includes(option1)}
                    onChange={handleCheckboxChange}
                  />
                  {option1}
                </label>
              </div>
            ))}
          </div>
          {/* Input field and button to add a new option */}
          <div style={{ marginTop: '20px' }} className="add-currie-option">
            <div className="add-currie-option-area flex">
              <input
                type="text"
                value={newOption1}
                onChange={(e) => setNewOption1(e.target.value)}
                placeholder="Enter a new option"
              />
            </div>
            <div className="flex">
              <button
                onClick={handleAddOption}
                className="add-currie-option-btn"
              >
                Add Option
              </button>
            </div>
          </div>
        </div>

        <div className="add-currie-options">
          <div className="currie-option">
            <h2>Select Meal Options</h2>

            {/* Display checkboxes */}
            {options2.map((option2, index2) => (
              <div key={index2}>
                <label>
                  <input
                    type="checkbox"
                    value={option2}
                    checked={selectedOptions2.includes(option2)}
                    onChange={handleCheckboxChange2}
                  />
                  {option2}
                </label>
              </div>
            ))}
          </div>
          {/* Input field and button to add a new option */}
          <div style={{ marginTop: '20px' }} className="add-currie-option">
            <div className="add-currie-option-area flex">
              <input
                type="text"
                value={newOption2}
                onChange={(e) => setNewOption2(e.target.value)}
                placeholder="Enter a new option"
              />
            </div>
            <div className="flex">
              <button
                onClick={handleAddOption2}
                className="add-currie-option-btn"
              >
                Add Option
              </button>
            </div>
          </div>
        </div>

        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
