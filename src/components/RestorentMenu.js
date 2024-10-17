import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCatagory";
import { useState } from "react";

const RestorentMenu = () => {
  const [showIndex,setShowIndex] = useState(0)
  const { id } = useParams();

  const restInfo = useRestaurantMenu(id);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.data?.cards[2]?.card?.card?.info;

  // const { itemCart } =
  //   restInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     .card.itemCards;

  const catagories =
    restInfo?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return  c.card.card["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      }
    );
  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* {accordion} */}
      {catagories.map((c,index) => (
      <RestaurantCategory key={index} data = {c} showItems={index == showIndex?true:false} setShowIndex={()=>setShowIndex(index)} /* pass any necessary props here */ />
    ))}
    </div>
  );
};
export default RestorentMenu;
