import Error from "./Error";
import Shimmer from "./Shimmers/Shimmer";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { RESTAURANT_LIST_API } from "../utils/constants";
import RestaurantCard, { withOpenedLabel } from "./RestaurantCard";
import Search from "./Header/Search";

require("dotenv").config;

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchInputText, setSearchInputText] = useState("");
  const [error, setError] = useState(null);

  const OpenedRestaurantCard = withOpenedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    searchInputText === "" ? setFilteredRestaurant(listOfRestaurant) : "";
  });

  const fetchData = async () => {
    try {
      const response = await fetch(RESTAURANT_LIST_API);
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const json = await response.json();
      
      let restaurants;
      // let data = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          // ?.restaurants || [];

      let arr = [];
      if (json?.data?.cards) {
        for (let i = 0; i < json.data.cards.length - 1; i++) {
          const restaurants = json.data.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (restaurants) {
            arr.push(restaurants);
          }
        }
      }
      
      const lengthiestArray = arr.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
      }, []);

      restaurants = lengthiestArray;

      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) {
    return <Error message={`Error: ${error}`} />;
  }

  return (
    <>
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] shadow-lg">
      <img 
        src="https://img.freepik.com/free-photo/hot-pizza-adorned-with-vibrant-tomatoes-greens-features-melted-cheese-stretching-out_91128-4677.jpg?t=st=1737542567~exp=1737546167~hmac=e2372b708d3080c88279f215bf661cf0105f30a67f4b3ed286c06ea3785b09b4&w=1800"
        className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover absolute top-0 left-0 z-0"
        alt="Background"
      />
      
      <div className="absolute top-0 left-0 w-full h-full bg-black via-transparent to-transparent z-1 opacity-30"></div>

      <Search />
    </div>

    <div className="flex justify-center">
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

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
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
              </>
  );
};

export default Body;
