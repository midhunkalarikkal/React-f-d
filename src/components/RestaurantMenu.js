import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constants";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.5276416&lng=76.2144349&restaurantId=86242&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    setResData(json.data);
  };

  const { name, city, cloudinaryImageId, sla } =
    resData?.cards[2]?.card?.card?.info || {};
  const { title, itemCards = [] } =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
      ?.card || {};
  console.log(
    "title : ",
    resData?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards[0].card?.info
  );

  return resData === null ? (
    <Shimmer />
  ) : (
    <div className="restaurantMenu-body">
      <div className="restaurantMenu-body-container">
        <div className="restaurantMenu-head">
          <div className="head-img">
            <img src={CDN_LINK + cloudinaryImageId} alt="" />
          </div>
          <div className="head-text">
            <h1>{name}</h1>
            <p>{sla?.slaString}</p>
            <p>{city}</p>
          </div>
        </div>
        <div className="menu">
          <h3 className="menu-head">Menu</h3>
          <h4 className="menu-title">{title}</h4>
          <div className="manuCards-wrap">
            {itemCards.map((item) => (
              <div className="menuCard" key={item.card.info.id}>
                <div className="menuCard-text">
                  <h3 className="menuCard-title">{item.card.info.name}</h3>
                  <h4 className="menuCard-price">
                    ₹ {item.card.info.price / 100}
                  </h4>
                  <div className="menuCard-rating">
                    ⭐ {item.card.info.ratings.aggregatedRating.rating} / 5
                  </div>
                  <p className="menuCard-description">
                    {item.card.info.description}
                  </p>
                </div>
                <div className="menuCard-img">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                    alt={item.card.info.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
