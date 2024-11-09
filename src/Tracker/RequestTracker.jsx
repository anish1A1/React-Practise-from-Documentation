import { useState } from "react";


export default function RequestTracker() {

    const [pending, setPending] = useState(0);
    const [inProgress, setInProgress] = useState(0);

    async function handleSubmit(){
        setPending(p => p+1);
        await delay(3000);   // This will call the delay function which returns a new Promise
        setInProgress(i => i+1);
        setPending(i => i - 1);

    }
    return(
        <> 
            <h3>Pending : {pending}</h3>
            <h3>In Progress : {inProgress}</h3>

            <button onClick={handleSubmit} >Buy</button>
        </>
    );
}

function delay(seconds){
    return new Promise(resolve => {
        setTimeout(resolve, seconds);
    })
}