const Toolbar = ({onClick}) => {
    return (
        <div onClick={onClick}>
            <button onClick={onClick}>button 1</button>
            <button onClick={onClick}>button 2</button>
        </div>
    )
}

export default Toolbar