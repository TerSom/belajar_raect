import Todo from "./Todo";

const TodoList = () => {
    return (
        <ul>
            <Todo isCompleted={true} text={"belajar javascrpt"} isDeleted={true} />
            <Todo isCompleted={true} text={"belajar node js"} />
            <Todo isCompleted={true} text={"belajar mongodb"} />
            <Todo isCompleted={false} text={"belajar React"} />
        </ul>
    )
}

export default TodoList