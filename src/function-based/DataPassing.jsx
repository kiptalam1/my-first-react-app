// function Button (props) {
//     const buttonStyles = {
//         color: props.color,
//         fontSize: props.fontSize + 'px'
//     }
//     return (
//         <>
//             <button style={buttonStyles}>{props.text}</button>
//         </>
//     )
// }

{/* Prop destructuring */}
function Button ({text, color, fontSize}) {
    const buttonStyles = {
        color: color,
        fontSize: fontSize + 'px'
    }
    return (
        <>
            <button style={buttonStyles}>{text}</button>
        </>
    )
}


export default function ButtonApp () {
    return (
        <>
        <Button text="Click me" color="green" fontSize={16} />
        <Button text="Dont Click me" color="red" fontSize={12} />
</>
    )
}