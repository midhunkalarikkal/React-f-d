import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showList, setShowIndex , index }) => {

  console.log(data.itemCards)
  return (
    <div>
      <div className="mt-2">
        <div
          className="flex justify-between p-2 bg-slate-100 cursor-pointer shadow-lg"
          onClick={setShowIndex}
        >
          <div className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </div>
          <div>{showList ? "⬆️" : "⬇️"}</div>
        </div>
        {showList && (
          <ItemList key={index} item={data.itemCards} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;