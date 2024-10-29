import EventButton from "./EventButton";


export default function Events(){
    return(
        <div>
        <EventButton message={'Playing'}>
        Play Movie 
        </EventButton>
        
        <EventButton message={'Stopping'}>
            Stop Movie
        </EventButton>
        </div>


    )
};

