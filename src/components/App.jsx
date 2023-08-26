// App.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { fetchContacts } from '../redux/contactsSlice'; 
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import '../styles.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="app-title">Phonebook</h1>
      <ContactForm />
      <h2 className="app-subtitle">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
