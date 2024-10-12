import RestaurantCard from './RestaurantCard';
import RES_LIST from '../utils/mockdata'
import { useState } from 'react'

console.log("RES_LIST : ",RES_LIST.filter((restaurant) =>  restaurant.info.avgRating > 4.5))

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant ] = useState(RES_LIST)
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