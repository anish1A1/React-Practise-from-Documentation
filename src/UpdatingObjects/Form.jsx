
import { useState } from "react";

export default function Form() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleFirstnameChange(e){
        setPerson({  // first create a object
            ...person, // then spread the existing object 
            firstName: e.target.value // then update the value of the property

        }
        )
    }

    function handleLastnameChange(e) {
       setPerson({
            ...person,
            lastName: e.target.value
       })
       
    }
    function handleEmailChange(e) {
       setPerson({
        ...person,
        email: e.target.value
       })
    }


    // we can also use this way 
    // use the [ and ] braces inside your object definition to specify a property with a dynamic name.
    // eslint-disable-next-line no-unused-vars
    function handleChange(e) {
        setPerson({
            ...person,
            [e.target.name]: [e.target.value]
        })
    }

    return (
        <>
            <label className="font-black">
                First Name: {person.firstName}
           
            <input type="text" value={person.firstName}  name="FirstName"
                onChange={handleFirstnameChange} className="  bg-transparent"
            />
             </label>

            <label htmlFor="" >
                Last Name: {person.lastName}
            <input type="text" value={person.lastName} name="LastName"
             onChange={handleLastnameChange}
            className="  bg-transparent"/>
            </label>

            <label htmlFor="" >
                Email: {person.email}
            <input type="text" value={person.email} name="email"
             onChange={handleEmailChange} className="  bg-transparent"/>
            </label>
        </>
        // Note that the ... spread syntax is “shallow”—it only copies things one level deep. 
        //This makes it fast, but it also means that if you want to update a nested property, you’ll have to use it more than once.
    );
}