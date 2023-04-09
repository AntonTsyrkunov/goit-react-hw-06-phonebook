import css from '../styles/Contactlist.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactSlice';

const Contactlist = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    const filteredContacts = state.contacts.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
    );
    return filteredContacts;
  });
  return (
    <div className={css.contacts_wrapper}>
      <ul className={css.contact_list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.contact_list_item}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => dispatch(removeContact(id))}
              name={id}
              className={css.remove_button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contactlist;
