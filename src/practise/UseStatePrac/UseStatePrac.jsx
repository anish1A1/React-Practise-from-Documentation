import { useState } from "react";
import { sculptureList } from './data.js';

export default function UseStatePrac() {

    const [index, setIndex] = useState(0);


    function hanleClick(){
        setIndex(index + 1);
    };

    let sculpture = sculptureList[index];


    return (
        <div>
            <button onClick={hanleClick}> next </button>

            <h2> <i>{sculpture.name} </i> 
            by {sculpture.artist}</h2>
            <br />
            <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
            <p>{sculpture.description}</p>
            <img  src={sculpture.url} 
        alt={sculpture.alt} />



        </div>
    );
}