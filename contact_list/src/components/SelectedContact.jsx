import { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const[contact, setContact] = useState(null);
    useEffect(() => {
        async function fetchContact() {
            const response = await fetch(`http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            const { results: contact } = await response.json();
            setContact(contact);
            console.log(contact);
        }
        fetchContact();
        
    }, [])
    console.log(contact);
    return (
        
        <div>hello</div>
    )
}