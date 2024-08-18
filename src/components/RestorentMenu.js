import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestorentMenu = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + id);
    const mainData = await data.json();
    setRestInfo(mainData);
  };

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCart } =
    restInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      .card.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu Item</h2>
      <h6>item1</h6>
      <h6>item1</h6>
      <h6>item1</h6>
      <h6>item1</h6>
    </div>
  );
};
export default RestorentMenu;