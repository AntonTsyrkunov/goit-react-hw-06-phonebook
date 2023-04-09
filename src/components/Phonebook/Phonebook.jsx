import { useState } from 'react';
import css from '../styles/Field-form.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { nanoid } from 'nanoid';

const Phonebook = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <p className={css.caption}>Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInputChange}
          className={css.input}
        />
        <p className={css.caption}>Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleInputChange}
          className={css.input}
        />
        <br />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default Phonebook;
