import { useState } from "react"
import { useImmer } from "use-immer"
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"

const Task = () => {
    const [items, setitems] = useImmer([])

    function handleOnSubmit(item) {
        setitems(draft => {
            draft.push(item)
        })
    }

    return (
        <div className="">
            <TaskForm onSubmit={handleOnSubmit}></TaskForm>
            <TaskList items={items}></TaskList>
        </div>
    )
}

export default Task