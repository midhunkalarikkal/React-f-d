import CartItemList from "./cartItemList";
import { clearCart } from '../utils/cartSlice';
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="flex flex-col w-10/12 md:w-6/12 m-auto">
      <div className="flex justify-between p-3 rounded-lg bg-slate-200 m-3">
        <div className="flex">
          <h4 className="font-bold text-lg">Your Cart</h4>
          <h4 className="font-bold text-lg px-2">Items[0]</h4>
        </div>
        <div className="flex align-middle">
          <button className="tex-lg p-1 px-3 bg-black rounded-lg text-yellow-50" onClick={handleClearCart}>
            Clear cart
          </button>
        </div>
      </div>
      <div className="p-3">
        { cartItems.length === 0 ? <h3>Your cart is empty</h3> : <CartItemList item={cartItems} />}
      </div>
    </div>
  );
};

export default Cart;
