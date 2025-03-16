function Buttoni ({ text="Go", color="Blue", fontSize=16, handleClick }) {
    const buttonStyles = {
        color: color,
        fontSize: fontSize + 'px'
    };
    return <button onClick={handleClick} style={buttonStyles}>{text}</button>
}

export default function ButtonAppu () {
    const handleButtonClick = (url) => {
        window.location.href = url;
    }
    return (
        <div>
            <Buttoni handleClick={() => handleButtonClick("https://www.google.com")}/>
        </div>
    )
}