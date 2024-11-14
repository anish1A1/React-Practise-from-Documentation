import { useState } from "react";
import ItemList from "./ItemList";

//let nextId = 3;

const initialList = [
    { id: 0, title: 'Big Bellies', seen: false },
    { id: 1, title: 'Lunar Landscape', seen: false },
    { id: 2, title: 'Terracotta Army', seen: true },
  ];
  
export default function UpdatingObjectArray() {
    
    let [yourList,setYourList] = useState(initialList);
    let [mylist, setMylist] = useState(initialList);

    function handleListToggle(artworkId, nextSeen) {
       
        setMylist(
            mylist.map( artwork => {
                if (artwork.id === artworkId) {
                    return{
                        ...artwork,
                        seen: nextSeen
                    }

                    
                }

                else{
                    return artwork;
                }
            })
        )
    }

    
    function handleYourListToggle(artworkId, nextSeen) {

       setYourList(yourList.map(artwork => {
        if (artwork.id === artworkId){

            //create a *new* object with changes 
            return {
                ...artwork,
                seen : nextSeen
            }
        }
        else{
            //No change
            return artwork;
        }
       }))
       
    }
        
    return(
        <div>
            <h1>
                Art Bucket List: 
            </h1>
            <h3> My list of art to see: </h3>

                <ItemList 
                artworks={mylist}
                onToggle={handleListToggle}
                />

                <h2>Your Lists:</h2>

                <ItemList 
                artworks={yourList}
                 onToggle={handleYourListToggle} />
            
        </div>
    );
}