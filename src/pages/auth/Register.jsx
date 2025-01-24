import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useState } from "react";
// Adjust the path as necessary
import { register } from "../../auth/authentication";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    phoneNumber: "",
    NIC: "",
    email: "",
    password: "",
    role: "shopkeeper"
  });

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,

    }
  );

}

  const registerUser = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    await register(data.email, data.password,data);
    setIsLoading(false);
    navigate("/login");

  }



  return (
    <div className="main-wrapper">
      <div className="auth-wrapper">
        <h2 className="heading">Shop Keeper Portal</h2>
        <img src={assets.logo} alt="logo" />
        <form onSubmit={registerUser}>
          <input
            type="text"
            name="firstname"
            placeholder="firstname"
            className="input-decoration"
            onChange={handleData}
          />
          <input
            type="text"
            name="lastname"
            placeholder="lastname"
            className="input-decoration"
            onChange={handleData}
          />
          <input
            type="text"
            name="address"
            placeholder="address"
            className="input-decoration"
            onChange={handleData}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="phoneNumber"
            className="input-decoration"
            onChange={handleData}
          />
          <input
            type="text"
            name="NIC"
            placeholder="NIC"
            className="input-decoration"
            onChange={handleData}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            className="input-decoration"
            onChange={handleData}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input-decoration"
            onChange={handleData}
          />
          <button className="btn" type="submit">{isLoading ? "Registering..." : "Register"}</button>
        </form>
        <p>
          Already Have an Account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
