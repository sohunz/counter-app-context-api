import React from "react";
import CounterApp from "./components/CounterApp";
import CounterProvider from "./contexts/CounterProvider";

const App = () => {
    return (
        <>
            <CounterProvider>
                <CounterApp />
            </CounterProvider>
        </>
    );
};

export default App;
