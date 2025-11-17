import { useState } from "react"

const Counter = () => {
    let [counter,setcounter] = useState(0)

    console.log(`counter ${counter}`)

    function HandleClick() {
        setcounter(c => c + 1)
        setcounter(c => c + 1)
        setcounter(c => c + 1)
        console.log(counter)
    }

    return (
        <div className="">
            <button onClick={HandleClick}>increment</button>
            <div className="">
                <h1>Counter = {counter}</h1>
            </div>
        </div>
    )
}

export default Counter