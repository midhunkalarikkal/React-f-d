import { useDispatch } from "react-redux";
import { addItem } from '../utils/cartSlice';
import { CDN_LINK } from "../utils/constants";
import { toast } from "react-toastify";

const ItemList = ({ item }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast.success("Item added to cart");
  };

  return (
    <>
      {item.map((item, index) => (
        <div
          className="flex justify-between p-3 bg-slate-50 border-b-2 mt-1"
          key={index}
        >
          <div className="flex flex-col justify-center w-9/12">
            <h3 className="font-bold text-md">{item.card.info.name}</h3>
            <h3>
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </h3>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="relative flex justify-center w-3/12">
            <img
              src={CDN_LINK + item.card.info.imageId}
              alt=""
              className="w-28 object-fill rounded-lg"
            />
            <button
              className="absolute bg-black text-green-400 font-bold text-md bottom-1 p-1 px-2 rounded-lg"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
