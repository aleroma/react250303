import {useState} from "react";

export const useCounter = (minCount, maxCount) => {
    const [counter, setCounter] = useState(minCount);

    const increment = () => {
        setCounter((current) => Math.min(current + 1, maxCount));
    }

    const decrement = () => {
        setCounter((current) => Math.max(current - 1, minCount));
    }

    return {counter, increment, decrement};
}
