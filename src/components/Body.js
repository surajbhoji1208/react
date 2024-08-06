import RestorentCard from "./RestorentCard"
import resData from "../utils/mockData"

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
       <button className="filter-btn">To rated restorent</button>
      </div>
      <div className="res-container">
        {resData.map((res) => (
          <RestorentCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
