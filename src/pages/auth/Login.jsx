import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./auth.css";
import { useState } from "react";
import { loginWithEmailAndPassword } from "../../auth/authentication";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setAccessToken,
  setEmail,
  setUid,
} from "../../global/authentication/createSlice";

export default function Login() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await loginWithEmailAndPassword(
        data.email,
        data.password
      );
      dispatch(setUid(response.user.uid));
      dispatch(setAccessToken(response.user.accessToken));
      dispatch(setEmail(response.user.email));
      // set localStorage Values
      localStorage.setItem("accessToken", response.user.accessToken);
      localStorage.setItem("uid", response.user.uid);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div className="main-wrapper">
      <div className="auth-wrapper">
        <h2 className="heading">Shop Keeper Portal</h2>
        <img src={assets.logo} alt="logo" />
        <form onSubmit={submitData}>
          <input
            type="text"
            placeholder="email"
            className="input-decoration"
            name="email"
            onChange={handleData}
          />
          <input
            type="password"
            placeholder="password"
            className="input-decoration"
            name="password"
            onChange={handleData}
          />
          <button className="btn">
            {isLoading ? "Log in processing" : "Login"}
          </button>
        </form>

        <p>
          Do not Have an Account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
