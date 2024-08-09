import { useState } from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom"
const Header =()=>{
  const [loginBtnName,setLoginBtnName] = useState("login")
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='contact'>Contact Us</Link></li>
            <li>Cart</li>
            <li> <button className="login" onClick={()=>{
              loginBtnName=="login"?setLoginBtnName('logout'):setLoginBtnName('login')
            }}>{loginBtnName}</button></li>
          </ul>
  
        </div>
      </div>
    )
  }

  export default Header