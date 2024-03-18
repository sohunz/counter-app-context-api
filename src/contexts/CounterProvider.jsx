import React, { useState } from "react";
import CounterContext from "./CounterContext";

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const Increase = () => {
        setCount((prev) => prev + 1);
    };

    const Decrease = () => {
        setCount((prev) => prev - 1);
    };

    const Reset = () => {
        setCount(0);
    };

    return (
        <CounterContext.Provider value={{ count, Increase, Decrease, Reset }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterProvider;
