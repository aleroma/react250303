import {DishCounter} from "./DishCounter.jsx";

export const RestaurantMenu = ({menu}) => {
    return (
        <div className="RestaurantMenu">
            <h3>Menu:</h3>
            <ul className="list-group list-group-flush">
                {menu.map((dish) => (
                    <li key={dish.id} className="list-group-item">
                        {dish.name} - {dish.price} $
                        <DishCounter/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

