import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      <div className="mt-2">
        <div className="flex justify-between p-2 bg-slate-200">
          <div className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </div>
          <div>⬇️</div>
        </div>
        <ItemList item={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
