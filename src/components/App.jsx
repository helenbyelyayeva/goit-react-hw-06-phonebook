import { ContactForm } from "./ContactsForm/ContactForm";
import { ContactList } from "./ContactsList/ContactList";
import { Filter } from "./Search/Filter";
import css from "./App.module.css";


export const App = () => {

  return (
    <div className={css.form}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );

}


