import { useState } from "react";


export default function Counter() {

    const [num1, setnum1] = useState(0);

    return(
        <>
            <h1>{num1}</h1>

        {/* here without Array function in the button will not update the value multiple times */}
            <button onClick={()=> {
                setnum1(num1 + 1);
                setnum1(num1 + 1);
                setnum1(num1 + 1);
            } }>No ArrayFun
            </button>

            <button onClick={() =>{
                setnum1(n => n+1);
                setnum1(n => n+1);
                setnum1(n => n+1);

            }}>
                With ArrayFun
            </button>

            {/* 
            Here, n => n + 1 is called an updater function. When you pass it to a state setter:

            React queues this function to be processed after all the other code in the event handler has run.
            During the next render, React goes through the queue and gives you the final updated state.
            */}


        </>
    );
}