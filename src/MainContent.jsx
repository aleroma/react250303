import {restaurants} from "./restaurants.js";
import {Restaurant} from "./Restaurant.jsx";
import {useState} from "react";

export const MainContent = () => {
    const [activeId, setActiveId] = useState(restaurants[0].id);
    return (
        <main className="container">
            <div className="TabButtons mt-3">
                {restaurants.map((restaurant) => (
                    <button key={restaurant.id} onClick={() => setActiveId(restaurant.id)}
                            className={activeId === restaurant.id ?
                                "btn btn-secondary me-3" :
                                "btn btn-outline-secondary me-3"}>
                        {restaurant.name}
                    </button>
                ))}
            </div>
            <div className="TabContent mt-3">
                {restaurants.map(function (restaurant) {
                    if (activeId === restaurant.id) {
                        return (
                            <Restaurant key={restaurant.id} restaurant={restaurant} />
                        );
                    }
                    return null;
                })}
            </div>
        </main>
    )
}
