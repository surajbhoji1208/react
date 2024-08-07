import RestorentCard from "./RestorentCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestorents, setListOfRestorent] = useState();
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const join = await data.json()
    const mainData = join.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map(res => res.info)
    setListOfRestorent(mainData)
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtereData = listOfRestorents.filter(
              // (res) => res.data.avgRating > 2.5
            );
            setListOfRestorent(filtereData);
          }}
        >
          To rated restorent
        </button>
      </div>
      <div className="res-container">
        {listOfRestorents?.map((res) => (
          <RestorentCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
