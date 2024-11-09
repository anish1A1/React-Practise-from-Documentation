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


        </>
    );
}