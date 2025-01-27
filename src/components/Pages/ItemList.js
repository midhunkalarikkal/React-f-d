import { toast } from "react-toastify";
import { addItem } from '../../utils/cartSlice';
import { CDN_LINK } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const ItemList = ({ item }) => {

  const user = useSelector((store) => store.user.user)
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    if(!user){
      toast.error("Please login.");
      return;
    }
    const { id,name,imageId,price, defaultPrice } = item?.card?.info;
    const cartItem = {
      id,
      name,
      imageId,
      price : price || defaultPrice,
    }
    dispatch(addItem(cartItem));
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
            <h3 className="font-bold text-sm md:text-lg">{item.card.info.name}</h3>
            <h3 className="text-xs md:text-md font-bold text-green-600">
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </h3>
            <p className="text-xs md:text-sm hidden md:block">{item.card.info.description}</p>
            <p className="text-xs md:text-sm md:hidden block">{
              item.card.info?.description?.length > 70 
                ? item.card.info.description.slice(0, 70) + '...' 
                : item.card.info?.description || 'No description available'
            }</p>
          </div>
          <div className="relative flex justify-center w-3/12">
            <img
              src={CDN_LINK + item.card.info.imageId}
              alt=""
              className="w-28 object-fill rounded-lg"
            />
            <button
              className="absolute bg-black text-green-400 font-bold text-xs md:text-md bottom-1 p-1 px-2 rounded-lg"
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
