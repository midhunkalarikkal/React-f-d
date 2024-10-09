import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, deliveryTime, cuisines, costForTwo } = resData.info;
  const {header, subHeader} = resData.info.aggregatedDiscountInfoV3 || {};
  return (
    <div className="res-Card">
      <div className="card-top">
        <img src={CDN_LINK + cloudinaryImageId} alt="res-card-image" className="res-card-img" />
        <h3 className="offer">{header +" "+subHeader}</h3>
      </div>
      <div className="card-details">
        <h3 className="resName">{name}</h3>
        <h4 className="rating-with-time">{avgRating} • {deliveryTime} mins</h4>
        <h5 className="rating-with-time">{cuisines.join(',')}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
