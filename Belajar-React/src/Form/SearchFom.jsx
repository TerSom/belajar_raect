const SearchForm = () => {
    return (
        <form>
            <input type="text" />
            <button onClick={(e) => {
                e.preventDefault()
                alert("button di click")
            }}>test</button>
        </form>
    )
}

export default SearchForm