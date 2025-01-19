import { assets } from "../../assets/assets";
import './auth.css';
export default function Login() {
  return (
    <div className="main-wrapper">
       <div className="auth-wrapper">
        <h2 className="heading">Shop Keeper Portal</h2>
          <img src={assets.logo} alt="logo" />
          <form>
            <input type="text" placeholder="email" className="input-decoration"/>
            <input type="password" placeholder="password" className="input-decoration"/>
            <button className="btn">Login</button>
          </form>
       </div>
    </div>
  );
}
