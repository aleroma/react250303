import { useCounter } from "./useCounter.js";

const MIN_COUNT = 0;
const MAX_COUNT = 5;

export const Counter = () => {
    const { counter, increment, decrement} = useCounter(MIN_COUNT, MAX_COUNT);

    return (
        <div className="Counter mt-2">
            <button
                className="PlusMinusButton"
                onClick={decrement}
                disabled={counter === MIN_COUNT}>
                <i className="fa-solid fa-square-minus fa-2x" style={{color: '#909dac'}}></i>
            </button>
            <span className="mx-2">{counter}</span>
            <button
                className="PlusMinusButton"
                onClick={increment}
                disabled={counter === MAX_COUNT}>
                <i className="fa-solid fa-square-plus fa-2x" style={{color: '#909dac'}}></i>
            </button>
        </div>
    )
}
