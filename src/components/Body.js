import Shimmer from "./Shimmer";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { RESTAURANT_LIST_API } from "../utils/constants";
import RestaurantCard, { withOpenedLabel } from "./RestaurantCard";

require("dotenv").config;

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");

  const OpenedRestaurantCard = withOpenedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    searchInputText === "" ? setFilteredRestaurant(listOfRestaurant) : "";
  });

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex w-10/12 md:w-3/4 flex-col items-center">
        <div className="w-full flex flex-wrap md:flex-nowrap p-4 m-4 justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="border-2 py-2 px-4 rounded-md w-full md:w-6/12"
            value={searchInputText}
            onChange={(e) => {
              setSearchInputText(e.target.value);
            }}
          />

          <button
            className="bg-orange-400 py-2 px-4 rounded-md text-yellow-50 w-full md:w-2/12"
            onClick={() => {
              const res = listOfRestaurant.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchInputText.toLowerCase())
              );

              res.length !== 0
                ? setFilteredRestaurant(res)
                : toast.info("OOPS.... No Restaurants Found!..");
            }}
          >
            Search
          </button>

          <button
            className="bg-orange-400 py-2 px-4 rounded-md text-yellow-50 w-full md:w-3/12"
            onClick={() => {
              setFilteredRestaurant(
                listOfRestaurant.filter(
                  (restaurant) => restaurant.info.avgRating > 4.5
                )
              );
            }}
          >
            Filter Top Rated
          </button>
        </div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredRestaurant.length === 0
            ? Array.from({ length: 3 }).map((_, index) => (
                <Shimmer key={index} />
              ))
            : filteredRestaurant.map((restaurant) => (
                <Link
                  key={restaurant.info.id}
                  to={"/restaurant/" + restaurant.info.id}
                >
                  {restaurant.info.isOpen ? (
                    <OpenedRestaurantCard resData={restaurant} />
                  ) : (
                    <RestaurantCard resData={restaurant} />
                  )}
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
