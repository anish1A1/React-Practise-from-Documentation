import { useState } from "react";
export default function NestedForm() {

    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Wy7RApO.jpeg',
        }
      });

      function handleTitleChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        })
      }

      function handleCityChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        })
      }


      function handleImageChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
        }
      })
    }

    return(
        <div className="justify-center grid m-5">
        <label >
            Name : {person.name}
            <input type="text" value={person.name}  className="bg-transparent"
            onChange={(e) => {
                setPerson({...person,
                    name : e.target.value
                })
            }} />
        </label>
            <br />

        <label > Title : {person.artwork.title}
            <input type="text" value={person.artwork.title} className="bg-transparent"
            onChange={handleTitleChange}
            />
        </label>

        <label > Title : {person.artwork.city}
            <input type="text" value={person.artwork.city} className="bg-transparent"
            onChange={handleCityChange}
            />
        </label>

        <label >Image: 
            <input type="text" value={person.artwork.image} className="bg-transparent" 
                onChange={handleImageChange}
            />
        </label>
<br />
        <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
        </p>
        <img src={person.artwork.image} 
        alt={person.artwork.image} />

        </div>
    );
}