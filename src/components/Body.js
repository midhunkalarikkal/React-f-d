import RestaurantCard, { withOpenedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
require('dotenv').config;

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  
  const [searchInputText , setSearchInputText] = useState("") 
  
  const OpenedRestaurantCard = withOpenedLabel(RestaurantCard);

  console.log(listOfRestaurant)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.5276416&lng=76.2144349&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants)
  };

  return (
    <div className="flex justify-center">
      <div className="flex w-3/4 flex-col items-center">
        <div className="w-full flex flex-row justify-center p-4 m-4">
          <input type="text" placeholder="Search" className="border-2 w-1/4 mx-3" value={searchInputText} onChange={ (e) => {setSearchInputText(e.target.value)}}/>
          <button className="bg-orange-400 py-1 px-4 rounded-md text-yellow-50 mx-3" onClick={ () => {setFilteredRestaurant(listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchInputText.toLowerCase())))} }>Search</button>
          <button
            className="bg-orange-400 py-1 px-4 rounded-md text-yellow-50 mx-3"
            onClick={() => {
              setFilteredRestaurant(listOfRestaurant.filter(
                (restaurant) => restaurant.info.avgRating > 4.5
              ));
            }}
            >
            Filter top rated
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {filteredRestaurant.length === 0 ? (
            Array.from({ length: 8 }).map((_, index) => <Shimmer key={index} />)
          ) : (
            filteredRestaurant.map((restaurant) => (
              <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                {
                  restaurant.info.isOpen ? <OpenedRestaurantCard resData={restaurant} /> : <RestaurantCard resData={restaurant} />
                }
                </Link>
            ))
          )}
        </div>
      </div>
          </div>
  );
};

export default Body;
