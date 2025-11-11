const AlertButton = ({text, message}) => {
    function HandleClick(){
        alert(message)
    }

    return (
        <button onClick={HandleClick}>{text}</button>
    )

}

export default AlertButton