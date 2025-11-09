import './helloWorld.css'

export default function HelloWorld () {
    const props = {
        text: "hello Wolrd gg", 
        umur: 20
    }
    return(
        <div>
            <Header {...props}/>
            <H1/>
        </div>
    )
}

function Header({text = "lupa taro text"}) {
    return(
        <>
        <h1 className="title">{text.toUpperCase()}</h1>
        </>
    )
}

function H1 () {
    const text = "belajar react js"
    return(
        <p className="content">{text.toLowerCase()}</p>
    )
}