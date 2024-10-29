

// eslint-disable-next-line react/prop-types
export default function EventButton({message, children}) {
    return(
        <button onClick={() => alert(message)}>
            {children}
            
        </button>
    );
}