
const CartItemList = ({ item }) => {

  return (
    <>
      {item.map((item, index) => (
        <div
          className="flex justify-between p-3 bg-slate-50 border-b-2 mt-1"
          key={index}
        >
          <div className="flex flex-col justify-center w-9/12">
            <h3 className="font-bold text-sm md:text-lg">{item.name}</h3>
            <h3 className="text-xs md:text-lg font-bold text-green-600">
              ₹{" "}
              {item.price / 100}
            </h3>
            {item.count > 1 && <p className="text-xs">Count : {item.count}</p>}
          </div>
          <div className="flex justify-center w-3/12">
            <img
              src={process.env.CDN_LINK + item.imageId}
              alt=""
              className="w-28 object-fill rounded-lg"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItemList;
