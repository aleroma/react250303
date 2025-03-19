import { useState } from "react";

const MIN_COUNT = 0;
const MAX_COUNT = 5;

export const useDishCounter = () => {
    const [counter, setCounter] = useState(MIN_COUNT);

    const increment = () => {
        setCounter((current) => Math.min(current + 1, MAX_COUNT));
    }

    const decrement = () => {
        setCounter((current) => Math.max(current - 1, MIN_COUNT));
    }

    return { counter, increment, decrement, MIN_COUNT, MAX_COUNT };
}
