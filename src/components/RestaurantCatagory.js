import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      {
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
          <div className="flex justify-between">
            <span>{data.card.card.title}</span>
            <span className="font-bold text-lg">Arrow</span>
          </div>
          <ItemList items={data.card.card}></ItemList>
        </div>
      }
    </div>
  );
};

export default RestaurantCategory;
