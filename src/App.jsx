import { useState } from "react";
import {
  initialContacts,
  ContactList,
} from "./components/ContactList/contactList";

import { SearchBox } from "./components/SearchBox/SearchBox";

const [contact, setContact] = useState(initialContacts);
const [filter, setFilter] = useState("");

const addContact = (newContact) => {
  const id = Date.now().toString() + Math.random().toString(36).substring(2, 9);
  const contactWithId = { id, ...newContact };
  setContacts;
  [...contacts, contactWitId];
};

const deleteContact = (id) => {
  setContacts(contacts.filter((contact) => contact.id !== id));
};

const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);
function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </>
  );
}

export default App;
