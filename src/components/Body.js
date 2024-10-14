import RestaurantCard from './RestaurantCard';
import RES_LIST from '../utils/mockdata'
import { useState, useEffect } from 'react'

console.log("RES_LIST : ",RES_LIST.filter((restaurant) =>  restaurant.info.avgRating > 4.5))

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant ] = useState([])

    useEffect(() => {
      fetchData()
    }, [])

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.5276416&lng=76.2144349&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json()
      const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      setListOfRestaurant(restaurants)
    }

    return (
      <div className="body">
          <div className="container">
            <div className="search">
              <input type="text" placeholder="Search" className="search-input" />
              <button className="search-button">Search</button>
              <button className="filter-button" onClick={
                () => {
                    const filteredListOfRestaurant = listOfRestaurant.filter((restaurant) => restaurant.info.avgRating > 4.5)
                    setListOfRestaurant(filteredListOfRestaurant)
                }
              }>Filter top rated</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} resData={restaurant}/>
                    ))
                }
            </div>
          </div>
      </div>
    );
  };

  export default Body;