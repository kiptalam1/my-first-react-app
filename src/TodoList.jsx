const todos = [
    { task: "mow the yard", id: crypto.randomUUID() },
    { task: "Work on Odin Projects", id: crypto.randomUUID() },
    { task: "feed the cat", id: crypto.randomUUID() },
];

export default function TodoList () {
    return (
        <div>
            <h1>To do list:</h1>
            <ul>
                {todos.map((todo) => <li key={todos.id}>{todo.task}</li>)}
            </ul>
        </div>
    )
}