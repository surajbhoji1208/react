import { useEffect, useState } from "react";

const RestorentMenu =()=>{
    const [restInfo,setRestInfo] = useState(null)
    useEffect( ()=>{
        
        fetchData(); 
    })
    const  fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId=636894&catalog_qa=undefined&submitAction=ENTER")
        console.log(await data.json());   
    }

    return (
        <div className="menu">
            <h1>name</h1>
            <h2>Menu Item</h2>
            <h6>item1</h6>
            <h6>item1</h6>
            <h6>item1</h6>
            <h6>item1</h6>

        </div>
    )
}
export default RestorentMenu