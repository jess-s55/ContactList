import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList.jsx'
import SelectedContact from './components/SelectedContact.jsx'

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  return (
    <>
      {selectedContactId ? (<div>Selected Contact View</div>) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}

