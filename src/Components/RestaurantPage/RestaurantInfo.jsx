import {RestaurantMenu} from "./RestaurantMenu.jsx";
import {Reviews} from "../Reviews/Reviews.jsx";

export const RestaurantInfo = ({restaurants, activeId}) => {
    const activeRestaurant = restaurants.find(restaurant => restaurant.id === activeId);
    const {name, menu, reviews} = activeRestaurant;
    return (
        <div className="RestaurantInfo mt-3">
            <h2>Restaurant {name}</h2>
            <RestaurantMenu menu={menu}/>
            <Reviews reviews={reviews} activeId={activeId}/>
        </div>
    )
}
