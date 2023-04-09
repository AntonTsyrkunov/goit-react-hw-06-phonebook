import Phonebook from './Phonebook/Phonebook';
import Contactlist from './Contacts/Contactlist';
import Filter from './Contacts/Filter';
import css from './styles/Phonebook.module.css';

export const App = () => {


  return (
    <div className={css.form_field}>
      <h1 className={css.heading}>Phonebook</h1>
      <Phonebook></Phonebook>
      <h2 сlassName={css.sub_heading}>Contacts</h2>
      <Filter ></Filter>
      <Contactlist
      ></Contactlist>
    </div>
  );
}
