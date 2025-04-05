import { Counter } from "../Counter/Counter.jsx";
import { useCounter } from '../Counter/useCounter.js';

export const RestaurantMenu = ({ menu }) => {
    const { counter, increment, decrement } = useCounter(0, 0, 5);

    return (
        <div className="RestaurantMenu">
            <h3>Menu:</h3>
            <ul className="list-group list-group-flush">
                {menu.map((dish) => (
                    <li key={dish.id} className="list-group-item">
                        {dish.name} - {dish.price} $
                        <Counter
                            counter={counter}
                            increment={increment}
                            decrement={decrement}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
