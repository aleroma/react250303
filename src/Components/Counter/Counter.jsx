import { useCounter } from './useCounter.js';

export const Counter = () => {
    const { counter, decrement, increment } = useCounter();

    return (
        <div className="Counter mt-2">
            <button
                className="PlusMinusButton"
                onClick={decrement}>
                <i className="fa-solid fa-square-minus fa-2x" style={{ color: "#909dac" }}></i>
            </button>
            <span className="mx-2">{counter}</span>
            <button
                className="PlusMinusButton"
                onClick={increment}>
                <i className="fa-solid fa-square-plus fa-2x" style={{ color: "#909dac" }}></i>
            </button>
        </div>
    );
};
