import { useState } from "react";

export default function ReplceItem() {
    
    let initialCounter = [0, 0, 0]

    const [counter, setCounter] = useState(initialCounter);

    function handleIncrementClick(index) {

        const nextCounter = counter.map( (c, i) => {
            if (i === index) {

                // Increase the value if the index of the function and the map index matches
                return c + 1;
            }
            else{
                // If not don't change anything // rest index are not changed
                return c;
            }
        });
        setCounter(nextCounter)
    }

    return (

        <div>
            <h1>Counter</h1>
            <ul>
                {counter.map( (count, i) => (
                    <li key={i}>
                        {count}
                        <button onClick={() => {
                            handleIncrementClick(i);
                        }}>Increase + 1</button>
                    </li>
                ))}
            </ul>
        </div>

    );
}