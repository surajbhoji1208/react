import { useState,useEffect } from "react";
import { MENU_API } from "./constant";
const useRestaurantMenu = (id)=>
{
    const [restInfo, setRestInfo] = useState(null);
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        const data = await fetch(MENU_API + id);
        const mainData = await data.json();
        setRestInfo(mainData);
      };

      return restInfo
    
}

export default useRestaurantMenu