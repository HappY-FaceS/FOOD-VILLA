import {restaurantList} from "../config";
import RestrauntCard from "./RestaurantCard";

const Body = () => {
    return (
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />; 
        })}
      </div>
    );
};


export default Body;