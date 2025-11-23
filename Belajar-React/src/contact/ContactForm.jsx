import {useImmer} from "use-immer"

const initialData = {
    nama : "",
    message : ""
}

const ContactForm = () => {
    const [contact, setContact] = useImmer(initialData)

    function handleNameChange(e) {
        setContact(draft => {
            draft.nama = e.target.value
        })
    }
    function handleMessageChange(e) {
        setContact(draft => {
            draft.message = e.target.value
        })
    }

    return (
        <div className="">
            <h1>Conatct Form</h1>
            <form action="">
                <input type="text" placeholder="Name" value={contact.nama} onChange={handleNameChange} />
                <br />
                <input type="text" placeholder="Message" value={contact.message} onChange={handleMessageChange} />
            </form>
            <h1>Contact Detail</h1>
            <p>Name : {contact.nama}</p>
            <p>Message : {contact.message}</p>
        </div> 
    )
}

export default ContactForm