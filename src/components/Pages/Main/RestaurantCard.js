
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, deliveryTime, cuisines, sla } =
    resData.info;
  const { header, subHeader } = resData.info.aggregatedDiscountInfoV3 || {};
  return (
    <div className="flex flex-col rounded-lg overflow-hidden">
      <div className="relative h-44 md:h-56">
        <img
          src={process.env.CDN_LINK + cloudinaryImageId}
          alt="res-card-image"
          className="w-full h-full md:h-full object-cover rounded-lg"
        />
        {header || subHeader ?
          <h3 className="absolute text-sm bottom-2 left-2 text-white bg-opacity-60 bg-black p-1 rounded">
            {header ? header : ""} {subHeader ? subHeader : ""}
          </h3> : ""
        }
      </div>
      <div className="py-1 px-2 flex flex-col flex-grow">
        <h3 className="text-md md:text-lg font-semibold">{name}</h3>
        <h4 className="text-sm text-gray-600">
          ⭐{avgRating} • {sla.slaString}
        </h4>
        <h5 className="text-xs md:text-sm text-gray-500 mt-2">{cuisines.join(", ")}</h5>
      </div>
    </div>
  );
};

export const withOpenedLabel = (RestaurantCard) => {
  return (Props) => {
    return (
      <div className="relative">
        <label className="absolute text-sm top-3 left-2 bg-opacity-60 bg-black text-white p-1 rounded-lg z-10">
          Opened
        </label>
        <RestaurantCard {...Props} />
      </div>
    );
  };
};

export default RestaurantCard;
