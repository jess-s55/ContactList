import { useState, useEffect } from 'react';
import ContactRow from './ContactRow.jsx';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const[contact, setContact] = useState(0);
    useEffect(() => {
       async function fetchContact() {
        try {
            const response = await fetch(`http://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            const contact = await response.json();
            setContact(contact);
        } catch (error) {
            console.error(error);
        }
        
        }
        fetchContact();
        
    }, [])
    console.log(contact);
    return (
        <div>
            <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                <tr>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}