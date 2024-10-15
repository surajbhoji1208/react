import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  console.log("itmes=>", items.itemCards);
  return (
    <div>
      {items.itemCards.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div>
            <div className="p-2">
              <span>{item.card.info.name}</span>
              <span>Rs {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <img src={CDN_URL + item.card.info.imageId} className="w-14" />
        </div>
      ))}
    </div>
  );
};
export default ItemList;
