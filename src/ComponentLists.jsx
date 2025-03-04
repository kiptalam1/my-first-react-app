// function ListItems (props) {
//     return <li>{props.animal}</li>;
// }

function List (props) {
    if (!props.animals) {
        return <div>Loading...</div>
    }
    // eslint-disable-next-line react/prop-types
    if (props.animals.length === 0) {
        return <div>There are no animals to display.</div>
    }
    return (
        <ul>
            {props.animals.map((animal)=> {
                return <li key={animal}>{animal}</li> ;
            })}
        </ul>
    );
}

function MainApp () {
    const animals = ["Lion", "Cow", "Snake", "Lizard", "Dog"];
    return (
        <div>
            <h1>Animals:</h1>
            <List animals={animals}/>
        </div>
    )
}
export default MainApp;