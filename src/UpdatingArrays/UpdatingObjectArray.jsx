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
        const myNextList = [...mylist];
        const artworks = myNextList.find(
            a => a.id === artworkId
        );
        artworks.seen = nextSeen;
        setMylist(myNextList);
    }

    
    function handleYourListToggle(artworkId, nextSeen) {

        const yourNextList = [...yourList];
        const yourArtsworks = yourList.find(
            a => a.id === artworkId
        );
        yourArtsworks.seen = nextSeen;
        setYourList(yourNextList);
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