import React, { useState } from "react";
function Punto3() {
const Punto3 = () => {
    const [count,setCount] = useState (10);

    return (
        <>
        <div>
            <p>(from changed state!)</p>
            <button onClick={() -> setCount (count + 1)}>Click me</button>
        </div>
        </>
    );
}
}