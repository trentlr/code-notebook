function ButtonEventProps({ onClick, children }) {
    return(
        <button onClick={onClick}>
            {children}
        </button>
    )
}

function PlayButton({ movieName }) {
    const handlePlayClick = () => {
        alert(`Playing ${movieName}!`)
    }
    return (
        <ButtonEventProps onClick={handlePlayClick}>
            Play "{movieName}"
        </ButtonEventProps>
    )
}

function UploadButton() {
    return (
        <ButtonEventProps onClick={() => alert('Uploading!')}>
            Upload Image
        </ButtonEventProps>
    )
}

export default function Toolbar() {
    return(
        <div>
            <br/>
            <PlayButton movieName="The Big Lebowski" />
            <UploadButton/>
        </div>
    )
}
