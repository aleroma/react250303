import { useState } from 'react';

export const useCounter = (initial = 0, min = 0, max = 5) => {
    const [counter, setCounter] = useState(initial);

    const increment = () => {
        setCounter(current => Math.min(current + 1, max));
    };

    const decrement = () => {
        setCounter(current => Math.max(current - 1, min));
    };

    return { counter, increment, decrement };
}
