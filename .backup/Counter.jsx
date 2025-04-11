import { useReducer } from "react";

const MIN_COUNTER = 0;
const MAX_COUNTER = 5;
const INITIAL_STATE = { counter: MIN_COUNTER };
const ACTIONS = {
    DECREMENT: "decrement",
    INCREMENT: "increment"
};

/**
 * @typedef {{ counter: number }} State
 */

/**
 * @typedef {{ type: "increment" | "decrement" }} Action
 */

/**
 * @param {State} state
 * @param {Action} action
 * @returns {State}
 */
function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.DECREMENT:
            return { counter: Math.max(MIN_COUNTER, state.counter - 1) }; // Prevent going below min
        case ACTIONS.INCREMENT:
            return { counter: Math.min(MAX_COUNTER, state.counter + 1) }; // Prevent going above max
        default:
            return state;
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <div className="Counter mt-2">
            <button
                className="PlusMinusButton"
                onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
                <i className="fa-solid fa-square-minus fa-2x" style={{ color: "#909dac" }}></i>
            </button>
            <span className="mx-2">{state.counter}</span>
            <button
                className="PlusMinusButton"
                onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
                <i className="fa-solid fa-square-plus fa-2x" style={{ color: "#909dac" }}></i>
            </button>
        </div>
    );
};
