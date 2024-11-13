import { useState } from "react";


const initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];

  let nextID = 3;
  
export default function InsertArray() {

    const [name, setname] = useState('');
    const [artists, setartists] = useState(initialArtists);

    function handleClick() {
        const insertAt = 1;  //The index where the value is to be added

        const nextArtist =[
            // The items before the insertion point: 
            ...artists.slice(0, insertAt),

            //New items
            { id : nextID++, name: name},

            //Items after the insertion point

            ...artists.slice(insertAt)

        ];
        setartists(nextArtist);
        setname('');
    }
    return(
        <div>
            <input type="text"  className="bg-transparent" value={name}
            onChange={e => setname(e.target.value)}
            />
            <button onClick={handleClick}>Insert</button>

            <ul>
                {artists.map( items =>(
                    <li key={items.id}>{items.name}</li>
                ))}
            </ul>
        </div>
    );
}