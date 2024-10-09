import RestaurantCard from './RestaurantCard';
import RES_LIST from '../utils/mockdata'

const Body = () => {
    return (
      <div className="body">
          <div className="container">
            <div className="search">
              <input type="text" placeholder="Search" className="search-input" />
              <button className="search-button">Search</button>
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