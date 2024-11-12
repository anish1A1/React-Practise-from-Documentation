/* eslint-disable no-unused-vars */
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
                artist.push({
                    id: nextId++,
                    name: name,
                })
            }}>ADD</button>

            <ul>
                {artist.map(artist => (
                    <li key={artist.id}> {artist.name}</li>
                ))}
            </ul>
            </div>
        
    );
}