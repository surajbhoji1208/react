import RestorentCard from "./RestorentCard";
import resData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestorents, setListOfRestorent] = useState(resData);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtereData = resData.filter(
              (res) => res.data.avgRating > 2.5
            );
            setListOfRestorent(filtereData);
          }}
        >
          To rated restorent
        </button>
      </div>
      <div className="res-container">
        {listOfRestorents.map((res) => (
          <RestorentCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
