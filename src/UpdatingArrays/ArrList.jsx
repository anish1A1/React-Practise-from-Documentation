 
import { useState } from "react";

export default function ArrList() {
    
    let nextId = 0;
    const [name, setName] = useState('');
    const [artist, setartist] = useState([]);
    return(
        <div> 
            
            <h1>inspiring Sculputures</h1>

            <input type="text"  className="bg-transparent"
            value={name}
            onChange={e => setName(e.target.value)} />

            <button onClick={()=>{
                setartist(       // we can use the spread operator here to update the state value
                    [...artist, {
                        id: nextId++,        //here artist will have a copy and 
                                            //we can add the name in the artist array in this way with a id of
                        name: name
                    } ]
                )
            }}>ADD</button>

            <ul>
                {artist.map(artist => (
                    <li key={artist.id}> {artist.name}</li>
                ))}
            </ul>
            </div>
        
    );
}