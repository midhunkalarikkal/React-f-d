import {useState} from 'react';
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    const [viewList, setViewList] = useState(false)

    const onListViewHandle = () => {
        setViewList(!viewList)
    }

  return (
    <div>
      <div className="mt-2">
        <div className="flex justify-between p-2 bg-slate-200 cursor-pointer shadow-lg" onClick={onListViewHandle}>
          <div className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </div>
          <div>{
            viewList ? "⬆️" : "⬇️"
            }</div>
        </div>
        {viewList && <ItemList key={data.itemCards.title} item={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
