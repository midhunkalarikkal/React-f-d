const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div className="mt-2">
      <div className="flex justify-between bg-slate-200 p-2">
        <div className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </div>
        <div>⬇️</div>
      </div>
      <siv className="p-3">

      </siv>
    </div>
  );
};

export default RestaurantCategory;
