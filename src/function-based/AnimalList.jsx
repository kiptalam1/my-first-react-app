// function AnimalList () {
//     const animals = ["Lion", "Cow", "Snake", "Lizard"];

//     return (
//         <div>
//             <h1>Animals:</h1>
//             <ul>
//                 {animals.map((animal) => { return <li key={animal}>{animal}</li>})}
//             </ul>
//         </div>
//     )

// }

const AnimalList = () => {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
    const animalsList = animals.map(animal => <li key={animal}>{animal}</li>);

    return (
        <div>
            <h1>Animals:</h1>
            <ul>
                {animalsList}
            </ul>
        </div>
    )
}

export default AnimalList;