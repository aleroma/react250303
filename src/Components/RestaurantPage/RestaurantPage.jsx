import {useState} from "react";
import {RestaurantButtons} from "./RestaurantButtons.jsx";
import {RestaurantInfo} from "./RestaurantInfo.jsx";

export const RestaurantPage = ({restaurants}) => {
    const [activeId, setActiveId] = useState(restaurants[0].id);

    return (
        <div className="RestaurantPage">
            <RestaurantButtons restaurants={restaurants} activeId={activeId} setActiveId={setActiveId} />
            <RestaurantInfo restaurants={restaurants} activeId={activeId} />
        </div>
    )
}
