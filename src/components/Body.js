import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
require('dotenv').config;



const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  
  const [filteredRestaurant, setFilteredRestaurant] = useState([])
  
  const [searchInputText , setSearchInputText] = useState("")  

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
    <div className="body">
      <div className="body-container">
        <div className="search">
          <input type="text" placeholder="Search" className="search-input" value={searchInputText} onChange={ (e) => {setSearchInputText(e.target.value)}}/>
          <button className="search-button" onClick={ () => {setFilteredRestaurant(listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchInputText.toLowerCase())))} }>Search</button>
          <button
            className="filter-button"
            onClick={() => {
              setFilteredRestaurant(listOfRestaurant.filter(
                (restaurant) => restaurant.info.avgRating > 4.5
              ));
            }}
          >
            Filter top rated
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurant.length === 0 ? (
            <Shimmer />
          ) : (
            filteredRestaurant.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
