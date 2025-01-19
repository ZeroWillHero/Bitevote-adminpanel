import { assets } from "../../assets/assets";

export default function Register () {
    return (
        <div className="main-wrapper">
               <div className="auth-wrapper">
                <h2 className="heading">Shop Keeper Portal</h2>
                  <img src={assets.logo} alt="logo" />
                  <form>
                    <input type="text" placeholder="email" className="input-decoration"/>
                    <input type="password" placeholder="password" className="input-decoration"/>
                    <button className="btn">Register</button>
                  </form>
               </div>
            </div>
    )
}