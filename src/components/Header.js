import { useState } from "react"
import { LOGO_URL } from "../utils/constant"
const Header =()=>{
  const [loginBtnName,setLoginBtnName] = useState("login")
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <li> <button className="login" onClick={()=>{
              setLoginBtnName('logout')
            }}>{loginBtnName}</button></li>
          </ul>
  
        </div>
      </div>
    )
  }

  export default Header