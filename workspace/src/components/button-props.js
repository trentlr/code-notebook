export default function ButtonProps( { message, children } ) {

    return(
        <button onClick={() => alert(message)}>
            {children}
        </button>
    )
}
