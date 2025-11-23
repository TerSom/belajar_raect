import { useState } from "react"
import { useImmer } from "use-immer"

const Task = () => {
    const [item, setItem] = useState("")
    const [items, setitems] = useImmer([])

    function handleChange(e) {
        setItem(e.target.value)
    }

    function handleClick(e) {
        e.preventDefault();
        setitems(draft => {
            draft.push(item)
        })
        setItem("")
    }
    
    return (
        <div className="">
            <h1>Create Task</h1>
            <form action="">
                <input value={item} onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
            </form>
            <h1>List Task</h1>
            <ul>
                {items.map((item,index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Task