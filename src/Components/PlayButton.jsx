export default function PlayButton(props) {
    return (
        <>
            <button className="play-button" onClick={props.playSong}>
                <img src={props.imageSource} alt="A play button"/>
            </button>
        </>
    )
}