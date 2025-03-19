import { useDishCounter } from "./useDishCounter";

export const DishCounter = () => {
    const { counter, increment, decrement, MIN_COUNT, MAX_COUNT } = useDishCounter();

    return (
        <div className="DishCounter mt-2">
            <button
                className="btn btn-outline-secondary btn-sm fs-5 py-0"
                onClick={decrement}
                disabled={counter === MIN_COUNT}>
                <span>-</span>
            </button>
            <span className="mx-2">{counter}</span>
            <button
                className="btn btn-outline-secondary btn-sm fs-5 py-0"
                onClick={increment}
                disabled={counter === MAX_COUNT}>
                <span>+</span>
            </button>
        </div>
    )
}
