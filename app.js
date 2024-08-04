import React from "react";
import ReactDOM from "react-dom";


const RestorentCard = ()=>{
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <img className="res-logo" src="https://png.pngtree.com/png-clipart/20221001/ourmid/pngtree-fast-food-big-ham-burger-png-image_6244235.png"></img>
      <h1>Meghana Foods</h1>
      <h4>Biriyani North indian</h4>
      <h4>4.4 start</h4>
      <h4>38 minuts</h4>
    </div>
  )
}
const Header =()=>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>

      </div>
    </div>
  )
}

const Body = ()=>{
  return (
    <div className="body">
      <div className="search">
        search
      </div>
      <div className="res-container">
        <RestorentCard/>
        <RestorentCard/>
        <RestorentCard/><RestorentCard/><RestorentCard/>
        <RestorentCard/><RestorentCard/>
        <RestorentCard/><RestorentCard/><RestorentCard/>
        <RestorentCard/><RestorentCard/>
      

      </div>
    </div>
  )
}

const AppLayout = ()=>
{
  return <div className="app"><Header></Header><Body/></div>
  
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
