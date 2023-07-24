export default function Button({contact, setSelectedContactId}) {
    return (
      <button onClick={() => setSelectedContactId(null)}>{contact}</button>
    )
}
//idk how to make the button work