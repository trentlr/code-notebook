export default function InlineButton() {


    return(
        <button onClick={() => {
            alert('You clicked a button, a button whose event handler was defined inline!')
        }}>
            Click me
        </button>
    )
}
