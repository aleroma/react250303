import { Counter } from "../Counter/Counter.jsx";
import { useCounter } from "../Counter/useCounter.js";

export const DishItem = ({ dish }) => {
    const { counter, increment, decrement } = useCounter(0, 0, 5);

    return (
        <li className="list-group-item">
            {dish.name} - {dish.price} $
            <Counter
                counter={counter}
                increment={increment}
                decrement={decrement}
            />
        </li>
    );
};
