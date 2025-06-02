export default function PlayButton(props) {
    return (
        <>
            <button className="play-button">
                <img src={props.imageSource} alt="A play button"/>
            </button>
        </>
    )
}