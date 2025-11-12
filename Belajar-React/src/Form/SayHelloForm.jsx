const SayHeelloForm = () => {
    function HandleClick(e) {
        e.preventDefault()
        const nama = document.getElementById("input_name").value
        document.getElementById('h1').innerHTML = `hello ${nama}`
    }

    return (
        <form>
            <div>
                <input id="input_name" type="text" />
                <button onClick={HandleClick}>Click button</button>
            </div>
            <h1 id="h1">hello World</h1>
        </form>
    )
}

export default SayHeelloForm