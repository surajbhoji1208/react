import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestorentMenu = () => {

  const { id } = useParams();

  const restInfo = useRestaurantMenu(id)
 
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
