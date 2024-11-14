/* eslint-disable react/prop-types */

// Button for the UpdatingObjectArray jsx file
export default function ItemList({ artworks, onToggle }) {
    
    
    return(
        
        <ul>
            {artworks.map( arts =>  (
                <li key={arts.id}>
                    <label>
                        <input type="checkbox" checked={arts.seen} 
                        onChange={e => {
                            onToggle(
                                arts.id,
                                e.target.checked
                            )
                        }}
                        />
                        {arts.title}
                    </label>
                </li>
            ))}
        </ul>
        
    );
}