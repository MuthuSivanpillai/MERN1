import { useState } from "react";

export default function Statedemo(props){
    const [count, setCount] = useState(0);
    return(
        <div className='something'>
            <h1>count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                INCREASE
            </button>
            <button onClick={() => setCount(count - 1)}>
                DECREASE
            </button>
        </div>

    )
}