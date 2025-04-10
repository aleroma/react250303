import { DishItem } from "./DishItem.jsx";

export const RestaurantMenu = ({ menu }) => {
    return (
        <div className="RestaurantMenu">
            <h3>Menu:</h3>
            <ul className="list-group list-group-flush">
                {menu.map((dish) => (
                    <DishItem key={dish.id} dish={dish} />
                ))}
            </ul>
        </div>
    );
};
