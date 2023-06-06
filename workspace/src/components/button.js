export default function Button() {
    function handleClick() {
        alert('you clicked me')
    }

    return(
        <button onClick={handleClick}>
            Click me
        </button>
    )
}
