import { useState } from "react";

const COLORS = ['deeppink', 'lightgray', 'lightblue', 'indigo', 'lightgreen'];

function ChangeBackground () {
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
    const [counter, setCounter] = useState(0);

    {/* function to handle button click*/}
    const onClickButton = (color) => () => {
        setBackgroundColor(color);
        setCounter(counter + 1);
    };

    return (
        <div className="background" style={{backgroundColor}}>
            {
                COLORS.map((color)=> (
                    <button type="button" 
                    onClick={onClickButton(color)} 
                    className={backgroundColor === color ? "selected" : ""}
                    key={color}>
                        {color}
                    </button>
                ))
            }
            <div className="count"
            style={{
                backgroundColor: "yellow",
                color: "black",
                border: "2px solid red",
                width: "50px",
                height: "30px",
                margin: "20px auto",
                borderRadius: "5px",
                fontSize: "20px"
            }}>
                {counter}
            </div>
        </div>
    )
}

export default ChangeBackground;