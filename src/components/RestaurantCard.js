import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, deliveryTime, cuisines, sla } =
    resData.info;
  const { header, subHeader } = resData.info.aggregatedDiscountInfoV3 || {};
  return (
    <div className="p-2 m-4 flex flex-col border border-grey-300 rounded-lg">
      <div className="relative h-56">
        <img
          src={CDN_LINK + cloudinaryImageId}
          alt="res-card-image"
          className="w-full h-full object-fit rounded-md"
        />
        <h3 className="absolute bottom-2 left-2 text-white bg-opacity-50 bg-black p-2 rounded">
          {header 
            ? header
            : "" + " " + subHeader
            ? subHeader
            : ""}
        </h3>
      </div>
      <div className="card-details">
        <h3 className="resName">{name}</h3>
        <h4 className="rating-with-time">
        ⭐{avgRating} • {sla.slaString}
        </h4>
        <h5 className="cuisines">{cuisines.join(", ")}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
