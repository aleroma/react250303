import {useReducer} from "react";

const MIN_COUNT = 1;
const MAX_COUNT = 5;
const INITIAL_STATE = {counter: MAX_COUNT};

const reducer = (state, action) => {
    const {counter} = state;
    switch (action.type) {
        case "DECREMENT":
            return {counter: Math.max(MIN_COUNT, counter - 1)}; // не менее MIN_COUNT
        case "INCREMENT":
            return {counter: Math.min(MAX_COUNT, counter + 1)}; // не более MAX_COUNT
        default:
            return state;
    }
};

export const useRating = () => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const {counter} = state;
    const decrement = () => dispatch({type: "DECREMENT"});
    const increment = () => dispatch({type: "INCREMENT"});

    return {
        counter: counter,
        decrement: decrement,
        increment: increment,
    };
};
