import { useState } from "react";


export default function RemoveList() {

    let initialArtists = [
        { id: 0, name: 'Marta Colvin Andrade' },
        { id: 1, name: 'Lamidi Olonade Fakeye'},
        { id: 2, name: 'Louise Nevelson'},
      ];

      const [artist, setartist] = useState(initialArtists);
    
    return ( 

        <div>

            <h1>Inspiring Sculputures</h1>

            <ul>
                {artist.map( (item) => (
                  <li key={item.id}>
                   {item.name} {' '}
                    <button onClick={() => {
                       setartist(
                        artist.filter( a => a.id !== item.id)
                       );
                    }}> Delete </button>
                  </li>  
                ))}
            </ul>

        </div>
     );
}