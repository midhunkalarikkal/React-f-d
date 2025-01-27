import Error from "../Error";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import ResCardShimmer from "../../Shimmers/ResCardShimmer";
import RestaurantCard, { withOpenedLabel } from "./RestaurantCard";
require("dotenv").config;
const API_URL = process.env.RESTAURANT_LIST_API;

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
      const response = await fetch(API_URL);
      const responseText = await response.text();
      const restaurants = JSON.parse(responseText);
      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] shadow-lg">
        <img 
          src="https://res.cloudinary.com/ddqyiqkbi/image/upload/v1737894216/2151846558_day7bk.jpg"
          className="w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover absolute top-0 left-0 z-0"
          alt="Background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black via-transparent to-transparent z-1 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-8/12 lg:w-1/2 z-3">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search Restaurants"
              className="w-9/12 sm:w-10/12 p-1 md:p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-black bg-opacity-80 text-white"
              value={searchInputText}
              onChange={(e) => {
                setSearchInputText(e.target.value);
              }}
            />
            <button className="w-3/12 sm:w-2/12 py-1 md:py-3 px-3 md:px-6 bg-orange-500 text-white rounded-md hover:bg-orange-400 transition duration-300 text-md font-semibold" 
            onClick={() => {
                const res = listOfRestaurant.filter((res) =>
                  res.info.name
                .toLowerCase()
                .includes(searchInputText.toLowerCase())
              );
              res.length !== 0
              ? setFilteredRestaurant(res)
              : toast.info("OOPS.... No Restaurants Found!..");
            }}>
              Search
            </button>
          </div>
        </div>
      </div>

      {
        filteredRestaurant.length === 0 && (
          <ResCardShimmer />
        )
      }

    {!error && filteredRestaurant.length !== 0 ? 
      <div className="flex justify-center min-h-screen">
        <div className="flex w-full md:w-10/12 flex-col items-center">
          <div className="grid gap-2 md:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {filteredRestaurant.map((restaurant) => (
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
      :
      <div className="flex flex-col items-center justify-center bg-black text-gray-700 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!!!</h1>
        <h2 className="text-2xl font-semibold mb-4">
        Error!
        </h2>
        <h3 className="text-xl font-medium text-gray-800 mb-2">
          Data fetching error
        </h3>
        <p className="text-gray-600">
          Please try again after sometimes.
        </p>
      </div>
    </div>
  }
  </>
  );
};

export default Body;
