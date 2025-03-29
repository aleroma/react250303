import {useCounter} from './useCounter.js';

// the «useCounter» hook is used by default
export const Counter = ({customCounterHook = useCounter}) => {
    const {counter, decrement, increment} = customCounterHook();

    return (
        <div className="Counter mt-2">
            <button type="button"
                    className="PlusMinusButton"
                    onClick={decrement}>
                <i className="fa-solid fa-square-minus fa-2x" style={{color: "#909dac"}}></i>
            </button>
            <span className="mx-2">{counter}</span>
            <button type="button"
                    className="PlusMinusButton"
                    onClick={increment}>
                <i className="fa-solid fa-square-plus fa-2x" style={{color: "#909dac"}}></i>
            </button>
        </div>
    );
};
