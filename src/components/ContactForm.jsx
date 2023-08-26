import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../contactsSlice'; 

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
<label>
    Name:
  <input
    type="text"
    name="name"
    value={name}
    onChange={e => setName(e.target.value)}
    pattern="^[a-zA-Zа-яА-Я '-]*$"
    title="Name may contain only letters, apostrophe, dash, and spaces."
    required
    className="contact-form__input"
    style={{ marginTop: '10px' }}
  />
</label>


<label>
  Number:
  <input
    type="tel"
    name="number"
    value={number}
    onChange={e => setNumber(e.target.value)}
    pattern="^\\+?[0-9\\s-()]*$"
    title="Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +"
    required
    className="contact-form__input"
    style={{ marginTop: '10px' }}
  />
</label>


      <button type="submit" className="contact-form__button">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
