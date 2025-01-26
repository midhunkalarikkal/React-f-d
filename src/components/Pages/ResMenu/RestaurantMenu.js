import { useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_LINK } from "../../../utils/constants";
import ResMenuShimmer from "../../Shimmers/ResMenuShimmer";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null)

  const { name, city, cloudinaryImageId, sla, avgRatingString } =
    resData?.cards[2]?.card?.card?.info || {};

    let categories = null;
    let cards = resData?.cards || [];
    
    if (cards.length > 0) {
      for (let i = 0; i < cards.length; i++) {
        if (cards[i]?.groupedCard) {
          categories = cards[i].groupedCard.cardGroupMap?.REGULAR.cards.filter(
            (c) =>
              c.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
          break;
        }
      }
    }

  return resData === null ? (
      <ResMenuShimmer />
  ) : (
    <div className="flex flex-col w-10/12 md:w-6/12 m-auto mt-2">
      <div className="flex p-4 rounded-lg shadow-md w-full h-full bg-slate-100">
        <div className="w-4/12 flex justify-center items-center">
          <img
            src={CDN_LINK + cloudinaryImageId}
            className="rounded-lg w-auto h-20 md:h-32 object-fit"
            alt="Restaurant"
          />
        </div>
        <div className="w-8/12 flex flex-col justify-center items-center text-center">
          <h1 className="text-lg md:text-xl font-semibold mb-2">{name}</h1>
          <span className="flex flex-row">
            <p className="text-sm md:text-md text-gray-600 mb-1">⭐ {avgRatingString}</p>
            <p className="text-sm md:text-md text-gray-600 mb-1 px-3">{sla?.slaString}</p>
          </span>
          <p className="text-xs md:text-sm text-gray-500">{city}</p>
        </div>
      </div>
      <div className="mt-2 mb-4">
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
