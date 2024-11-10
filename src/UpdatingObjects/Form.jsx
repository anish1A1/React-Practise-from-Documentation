
import { useState } from "react";

export default function Form() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleFirstnameChange(e){
        person.firstName = e.target.value;
    }

    function handleLastnameChange(e) {
        person.lastName = e.target.value;
    }
    function handleEmailChange(e) {
        person.email = e.target.value;
    }

    return (
        <>
            <label className="font-black">
                First Name: {person.firstName}
           
            <input type="text" value={person.firstName}
                onChange={handleFirstnameChange} className="  bg-transparent"
            />
             </label>

            <label htmlFor="" >
                Last Name: {person.lastName}
            <input type="text" value={person.lastName} onChange={handleLastnameChange}
            className="  bg-transparent"/>
            </label>

            <label htmlFor="" >
                Email: {person.email}
            <input type="text" value={person.email} onChange={handleEmailChange} className="  bg-transparent"/>
            </label>
        </>
    );
}