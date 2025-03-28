import {useReducer} from "react";

const MIN_COUNT = 0;
const MAX_COUNT = 5;
const INITIAL_STATE = {counter: MIN_COUNT};

const reducer = (state, action) => {
    switch (action) {
        case "DECREMENT":
            return {counter: Math.max(MIN_COUNT, state.counter - 1)}; // не менее MIN_COUNT
        case "INCREMENT":
            return {counter: Math.min(MAX_COUNT, state.counter + 1)}; // не более MAX_COUNT
        default:
            return state;
    }
};

export const useCounter = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return {
        counter: state.counter,
        decrement: () => dispatch("DECREMENT"),
        increment: () => dispatch("INCREMENT"),
    };
};
