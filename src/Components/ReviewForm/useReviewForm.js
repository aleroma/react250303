import {useReducer} from 'react';

export const SET_NAME = 'set_name';
export const SET_REVIEW_TEXT = 'set_review_text';
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const RESET_FORM = 'reset_form';

const MIN_RATING = 1;
const MAX_RATING = 5;

const initialState = {
    name: '',
    reviewText: '',
    rating: MAX_RATING,
};

function reducer(state, action) {
    switch (action.type) {
        case SET_NAME:
            return {...state, name: action.payload};
        case SET_REVIEW_TEXT:
            return {...state, reviewText: action.payload};
        case INCREMENT:
            return {...state, rating: Math.min(state.rating + 1, MAX_RATING)};
        case DECREMENT:
            return {...state, rating: Math.max(state.rating - 1, MIN_RATING)};
        case RESET_FORM:
            return initialState;
        default:
            return state;
    }
}

export function useReviewForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setName = (e) => dispatch({type: SET_NAME, payload: e.target.value});
    const setReviewText = (e) => dispatch({type: SET_REVIEW_TEXT, payload: e.target.value});
    const increment = () => dispatch({type: INCREMENT});
    const decrement = () => dispatch({type: DECREMENT});
    const resetForm = () => dispatch({type: RESET_FORM});

    return {state, setName, setReviewText, increment, decrement, resetForm};
}
