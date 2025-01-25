import { toast } from "react-toastify";
import CartItemList from "./CartItemList";
import { clearCart } from '../../../utils/cartSlice';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user?.user);
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const handleClearCart = () => {
    if(cartItems.length == 0){
      toast.success("Cart is already clear.");
    }else{
      dispatch(clearCart());
      toast.success("Cart cleared");
    }
  }

  const moveToPayment = () => {
    navigate('/payment');
  }
  
  if(!user){
    return (
      <div className="flex justify-center items-center bg-gray-50">
        <div className="text-center bg-white rounded-lg shadow-lg p-6 max-w-md border-orange-300 border-2">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Please Login to View Your Cart</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-10/12 md:w-6/12 m-auto">
      <div className="flex justify-between p-3 rounded-lg bg-slate-100 m-3 shadow-lg">
        <div className="flex">
          <h4 className="font-bold text-lg">Your Cart Items</h4>
        </div>
        <div className="flex align-middle">
          <button className="text-lg p-1 px-3 bg-red-500 rounded-lg text-white" onClick={handleClearCart}>
            Clear cart
          </button>
        </div>
      </div>
      <div className="p-3">
        { cartItems.length === 0 ?
        <div className="flex flex-col items-center justify-center h-64 bg-slate-100 px-4 shadow-lg rounded-lg">
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

      { cartItems.length > 0 && (
        <div className="flex justify-between p-3 rounded-lg bg-slate-100 m-3 mt-0">
        <div className="flex">
          <h4 className="font-bold text-lg">Confirm your order</h4>
        </div>
        <div className="flex align-middle">
          <button className="text-lg p-1 px-3 bg-green-500 rounded-lg text-white" onClick={moveToPayment}>
            Proceed to payment
          </button>
        </div>
      </div>
      )}

    </div>
  );
};

export default Cart;
