import { useState } from "react";

export default function Person () {
    const [person, setPerson] = useState({name: "Adams", age: 24});

    function reset() {
        setPerson({name: "Adams", age: 24});
    };
    console.log(person);
    function handleIncreaseAge() {
        const newPerson = {...person, age: person.age + 1};

        setPerson(newPerson);
    }

    return (
        <div>
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Increase Age</button>
            <button onClick={reset}>Reset Age</button>

        </div>
    )
}