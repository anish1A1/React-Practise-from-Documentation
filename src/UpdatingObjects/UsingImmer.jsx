
import { useImmer } from "use-immer";

export default function UsingImmer() {

    const [person, updatePerson] = useImmer({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
      });

    //   The draft provided by Immer is a special type of object, called a Proxy, that “records” what you do with it. 
    //This is why you can mutate it freely as much as you like! Under the hood, 
    //Immer figures out which parts of the draft have been changed, and produces a completely new object that contains your edits.
      function handleNameChange(e) {
        updatePerson(draft =>{
            draft.name = e.target.value
        })
      }

      function handleTitleChange(e) {
        updatePerson(draft =>{
            draft.artwork.title = e.target.value;
        })
      }


  function handleCityChange(e) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
    });
  }


    return(

        <>
        <label>
          Name:
          <input
            value={person.name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Title:
          <input
            value={person.artwork.title}
            onChange={handleTitleChange}
          />
        </label>
        <label>
          City:
          <input
            value={person.artwork.city}
            onChange={handleCityChange}
          />
        </label>
        <label>
          Image:
          <input
            value={person.artwork.image}
            onChange={handleImageChange}
          />
        </label>
        <p>
          <i>{person.artwork.title}</i>
          {' by '}
          {person.name}
          <br />
          (located in {person.artwork.city})
        </p>
        <img 
          src={person.artwork.image} 
          alt={person.artwork.title}
        />
      </>

    );
}