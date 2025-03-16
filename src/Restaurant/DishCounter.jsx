import {useState} from "react";

export const DishCounter = () => {
    const [counter, setCounter] = useState(0);
    const minCount = 0;
    const maxCount = 5;

    return (
        <div className="DishCounter mt-2">
            <button
                className="btn btn-outline-secondary btn-sm fs-5 py-0"
                onClick={() => setCounter((current) => Math.max(current - 1, minCount))}
                disabled={counter === minCount}>-
            </button>
            <span className="mx-2">{counter}</span>
            <button
                className="btn btn-outline-secondary btn-sm fs-5 py-0"
                onClick={() => setCounter((current) => Math.min(current + 1, maxCount))}
                disabled={counter === maxCount}>+
            </button>
        </div>
    )
}
