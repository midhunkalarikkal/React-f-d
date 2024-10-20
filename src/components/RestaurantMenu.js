import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null)

  const { name, city, cloudinaryImageId, sla, avgRatingString } =
    resData?.cards[2]?.card?.card?.info || {};

  const { title, itemCards = [] } =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
      ?.card || {};

  const categories =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resData === null ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col w-6/12 m-auto mt-2">
      <div className="flex p-4 rounded-lg shadow-md w-full h-full">
        <div className="w-4/12 flex justify-center items-center">
          <img
            src={CDN_LINK + cloudinaryImageId}
            className="rounded-lg w-auto h-32 object-fit"
            alt="Restaurant"
          />
        </div>
        <div className="w-8/12 flex flex-col justify-center items-center text-center">
          <h1 className="text-xl font-semibold mb-2">{name}</h1>
          <span className="flex flex-row">
            <p className="text-gray-600 mb-1">⭐ {avgRatingString}</p>
            <p className="text-gray-600 mb-1 px-3">{sla?.slaString}</p>
          </span>
          <p className="text-gray-500">{city}</p>
        </div>
      </div>
      <div className="mt-2">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            index = {index}
            showList = {index === showIndex ? true : false}
            setShowIndex = {() => 
              setShowIndex((prevIndex) => (prevIndex === index ? null : index))
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
