// src/pages/Account.js
import React, { useState } from 'react';
import './Account.css'; // Optional: Create a CSS file for styling
import { createShop } from '../../firebase/shop/createShop';


const Account = () => {
  const [accountDetails, setAccountDetails] = useState({
    shopName: '',
    shopAddress: '',
    shopkeeperName: '',
    email: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleAccountDetailsChange = (event) => {
    const { name, value } = event.target;
    setAccountDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    console.log('Account Details:', accountDetails); // Log the account details
    createShop(accountDetails);
    setIsLoading(false);
  };

  return (
    <div className="account-page">
      <h1>Account Details</h1>
      <form className="account-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="shopName">Shop Name</label>
          <input
            type="text"
            id="shopName"
            name="shopName"
            placeholder="Enter shop name"
            value={accountDetails.shopName}
            onChange={handleAccountDetailsChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="shopAddress">Shop Address</label>
          <input
            type="text"
            id="shopAddress"
            name="shopAddress"
            placeholder="Enter shop address"
            value={accountDetails.shopAddress}
            onChange={handleAccountDetailsChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="shopkeeperName">Shopkeeper Name</label>
          <input
            type="text"
            id="shopkeeperName"
            name="shopkeeperName"
            placeholder="Enter shopkeeper name"
            value={accountDetails.shopkeeperName}
            onChange={handleAccountDetailsChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={accountDetails.email}
            onChange={handleAccountDetailsChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          {isLoading ? "Saving details...." : "save Details"}
        </button>
      </form>
    </div>
  );
};

export default Account;