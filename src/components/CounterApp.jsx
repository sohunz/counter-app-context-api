import React, { useContext } from "react";
import CounterContext from "../contexts/CounterContext";

const CounterApp = () => {
    const { count, Increase, Decrease, Reset } = useContext(CounterContext);

    return (
        <div className="w-full flex justify-center flex-col items-center">
            <p className="text-5xl my-10">{count}</p>
            <div className="flex flex-row gap-2">
                <button
                    className="border px-5 py-1 rounded-md"
                    onClick={Increase}
                >
                    Increase
                </button>
                <button
                    className="border px-5 py-1 rounded-md"
                    onClick={Decrease}
                >
                    Decrease
                </button>
                <button className="border px-5 py-1 rounded-md" onClick={Reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default CounterApp;
