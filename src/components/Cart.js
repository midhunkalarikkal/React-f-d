import { toast } from "react-toastify";
import CartItemList from "./CartItemList";
import { clearCart } from '../utils/cartSlice';
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user?.user);

  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Cart cleared");
  }
  
  if(!user){
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center bg-white rounded-lg shadow-lg p-6 max-w-md border-orange-300 border-2">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Please Login to View Your Cart</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-10/12 md:w-6/12 m-auto min-h-screen">
      <div className="flex justify-between p-3 rounded-lg bg-slate-200 m-3">
        <div className="flex">
          <h4 className="font-bold text-lg">Your Cart Items</h4>
        </div>
        <div className="flex align-middle">
          <button className="tex-lg p-1 px-3 bg-red-500 rounded-lg text-yellow-50" onClick={handleClearCart}>
            Clear cart
          </button>
        </div>
      </div>
      <div className="p-3">
        { cartItems === null ?
        <div className="flex flex-col items-center justify-center h-64 bg-gray-100 px-4">
        <div className="max-w-md text-center bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-4">Looks like you haven't added anything to your cart yet.</p>
          <a href="/" className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
            Go to Home
          </a>
        </div>
      </div>
         : <CartItemList item={cartItems} />}
      </div>
    </div>
  );
};

export default Cart;
