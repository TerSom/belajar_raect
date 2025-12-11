import { useState } from "react"

const Counter = ({name}) => {
    const [Count, setCount] = useState(0)

    function handleClick(){
        setCount(Count + 1)
    }


    return (
        <div>
            <h1>Counter {name} : {Count}</h1>
            <button onClick={handleClick}>increment</button>
        </div>
    )
}

export default Counter