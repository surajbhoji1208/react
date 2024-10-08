const RestaurantCategory = ({ data }) => {
    console.log(data);
    return (
      <div>
        {data?.card?.card?.itemCards.map((res) => (
          <div
            key={res.card.info.category} // Make sure this key is unique (use a better key if available)
            className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between"
          >
            <span>{res.card.info.category}</span>
            <span className="font-bold text-lg">Arrow</span>
          </div>
        ))}
      </div>
    );
  };
  
export default RestaurantCategory