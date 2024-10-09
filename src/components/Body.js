import RestaurantCard from './RestaurantCard';
import RES_LIST from '../utils/mockdata'

console.log("RES_LIST : ",RES_LIST.filter((restaurant) =>  restaurant.info.avgRating > 4.5))

const Body = () => {
    return (
      <div className="body">
          <div className="container">
            <div className="search">
              <input type="text" placeholder="Search" className="search-input" />
              <button className="search-button">Search</button>
              <button className="filter-button" onClick={
                () => {
                    RES_LIST = RES_LIST.filter((restaurant) => restaurant.info.avgRating > 4.5)
                }
              }>Filter top rated</button>
            </div>
            <div className="res-container">
                {
                    RES_LIST.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} resData={restaurant}/>
                    ))
                }
            </div>
          </div>
      </div>
    );
  };

  export default Body;