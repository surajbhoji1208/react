import RestorentCard from "./RestorentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestorents, setListOfRestorent] = useState([]);
  const [listOfRestorentsDmy, setListOfRestorentDmy] = useState([]);
  const [searchText,setSearchText] = useState("")
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const join = await data.json()
    const mainData = join.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map(res => res.info)
    setListOfRestorent(mainData)
    setListOfRestorentDmy(mainData)
  };

  if(listOfRestorents.length == 0)
  {
    return <Shimmer></Shimmer>
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button className="search-btn"
           onClick={() => {
            const filterData = listOfRestorents.filter((res) =>
              res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
            );
            setListOfRestorentDmy(filterData);
          }} 
          >Search</button>

        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtereData = listOfRestorentsDmy.filter(
              (res) => res.avgRating > 4.3
            );
            setListOfRestorentDmy(filtereData);
          }}
        >
          To rated restorent
        </button>
      </div>
      <div className="res-container">
        {listOfRestorentsDmy?.map((res) => (
          <RestorentCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
