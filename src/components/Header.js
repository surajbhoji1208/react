import { useState,useContext } from "react"
import { LOGO_URL } from "../utils/constant"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { UserContext } from "../utils/UserContext";
const Header =()=>{
  const [loginBtnName,setLoginBtnName] = useState("login")
  const onlineStatus = useOnlineStatus()
  const {userName} = useContext(UserContext)
    return (
      <div className="header flex justify-between bg-pink-100 shadow-lg">
        <div className="logo-container">
          <img className="logo w-56" src={LOGO_URL}></img>
        </div>
        <div className="nav-items flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status : {onlineStatus?"online":"Offline"}</li>
            <li className="px-4"><Link to='/'>Home</Link></li>
            <li className="px-4"><Link to='/about'>About Us</Link></li>
            <li className="px-4"><Link to='contact'>Contact Us</Link></li>
            <li className="px-4"><Link to='/grocery'>Grocery</Link></li>
            <li className="px-4">Cart</li>
            <li> <button className="login" onClick={()=>{
              loginBtnName=="login"?setLoginBtnName('logout'):setLoginBtnName('login')
            }}>{loginBtnName}</button></li>
            <li className="px-4">User Name:{userName}</li>
          </ul>
  
        </div>
      </div>
    )
  }

  export default Header