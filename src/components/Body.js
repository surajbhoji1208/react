import RestorentCard from "./RestorentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestorents, setListOfRestorent] = useState([]);
  const [listOfRestorentsDmy, setListOfRestorentDmy] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const join = await data.json();
    const mainData =
      join.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.map(
        (res) => res.info
      );
    setListOfRestorent(mainData);
    setListOfRestorentDmy(mainData);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return <h1>you are offline now, please check your internat connection</h1>;
  }

  if (listOfRestorents.length == 0) {
    return <Shimmer></Shimmer>;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search m-4 p-4 flex items-center">
         <div>
         <input
            type="text"
            className="search-box border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterData = listOfRestorents.filter((res) =>
                res.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setListOfRestorentDmy(filterData);
            }}
          >
            Search
          </button>
        
         </div>
           <div>
           <button
              className="filter-btn px-4 py-2 bg-gray-100 rounded-lg"
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
     
        </div>
      </div>
      <div className="res-container flex flex-wrap  ">
        {listOfRestorentsDmy?.map((res) => (
          <Link key={res.id} to={"/restaurant/" + res.id}>
            {" "}
            <RestorentCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
