import {useState} from "react";
import {restaurants} from "../mock-data/restaurants.js";
import {RestaurantButtons} from "../Restaurant/RestaurantButtons.jsx";
import {RestaurantInfo} from "../Restaurant/RestaurantInfo.jsx";

export const MainContent = () => {
    const [activeId, setActiveId] = useState(restaurants[0].id);
    return (
        <main className="container">
            <RestaurantButtons restaurants={restaurants} activeId={activeId} setActiveId={setActiveId} />
            <RestaurantInfo restaurants={restaurants} activeId={activeId} />
        </main>
    )
}
