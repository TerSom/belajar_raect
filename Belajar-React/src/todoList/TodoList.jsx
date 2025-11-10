import Todo from "./Todo";

const TodoList = () => {
    const data = [
        {
            id : 0,
            text : "belajar javascript",
            isCompleted : true
        },
        {
            id : 1,
            text : "belajar node.js",
            isCompleted : true
        },
        {
            id : 2,
            text : "belajar mongodb",
            isCompleted : true
        },
        {
            id : 3,
            text : "belajar react",
            isCompleted : false
        },
        {
            id : 4,
            text : "belajar react",
            isCompleted : false
        },
    ]

    return (
        <ul>
            {data.map((todo) => {
                return <Todo key={todo.id} {...todo} />
            })}
        </ul>
    )
}

export default TodoList